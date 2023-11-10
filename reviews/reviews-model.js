import mongoose from "mongoose";
import reviewsSchema from "./reviews-schema.js";

const reviewsModel = mongoose.model("ReviewsModel", reviewsSchema);

export default reviewsModel;