import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import UsersController from "./users/users-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import bookmarkController from "./bookmarks/bookmark-controller.js";
import SessionController from "./users/session-controller.js";

mongoose.connect(
  "mongodb+srv://sylviawing96:sylviawing72273@clusterkanbas.5ud86ou.mongodb.net/viewvibe?retryWrites=true&w=majority"
);

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3001",
  })
);

app.enable('trust proxy');
app.use(
  session({
    secret: "should be environment variable!",
    resave: false,
    saveUninitialized: true,
    //cookie: { secure: true, sameSite: 'none' }
    cookie: { secure: false},
  })
);
app.use(express.json());

UsersController(app);
ReviewsController(app);
bookmarkController(app);
SessionController(app);

app.listen(process.env.PORT || 4001);
