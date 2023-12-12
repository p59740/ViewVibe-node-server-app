import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema(
    {
        username: { type: String, required: true },
        content: { type: String, required: true },
        score: Number,
        imdbID: { type: String, required: true },
        time: {type: Number, required: true},
        type: {type: String, required: true}
    },
    { collection: "reviews" }
);

export default reviewsSchema;
