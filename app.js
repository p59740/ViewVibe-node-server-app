import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import ReviewsController from "./reviews/reviews-controller.js";
import UsersController from "./users/users-controller.js";
import SessionController from "./users/session-controller.js";
import bookmarkController from "./bookmarks/bookmark-controller.js";

mongoose.connect(
    "mongodb+srv://sylviawing96:sylviawing72273@clusterkanbas.5ud86ou.mongodb.net/test?retryWrites=true&w=majority"
);

const app = express();
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

app.enable('trust proxy');
app.use(
    session({
        secret: "should be environment variable!",
        resave: false,
        saveUninitialized: true,
        //cookie: { secure: true, sameSite: 'none' }
        cookie: { secure: false },
    })
);
app.use(express.json());

ReviewsController(app);
UsersController(app);
SessionController(app);
bookmarkController(app);

app.listen(process.env.PORT || 4000);
