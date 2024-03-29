import reviewsModel from "./reviews-model.js";

export const createReview = (review) => reviewsModel.create(review);

export const findAllReviews = () => reviewsModel.find();

export const findReviewByIMDBID = (imdbID) => reviewsModel.find({imdbID: imdbID});

export const findByUserName = (username) => reviewsModel.find({username: username});

export const deleteReview = (rid) => reviewsModel.deleteOne({ _id: rid });
