import reviewsModel from "./reviews-model.js";

export const createReview = (review) => reviewsModel.create(review);

export const findAllReviews = () => reviewsModel.find();

export const findReviewByIMDBID = (imdbID) => reviewsModel.find({imdbID: imdbID});

export const findByUserName = (username) => reviewsModel.find({username: username});

export const deleteReview = (rid) => reviewsModel.deleteOne({ _id: rid });

//
// export const findByReviewname = (reviewname) => reviewsModel.findOne({ reviewname });
//
// export const findByCredentials = (reviewname, password) =>
//     reviewsModel.findOne({ reviewname, password });
//
// export const deleteReview = (uid) => reviewsModel.deleteOne({ _id: uid });
//
// export const updateReview = (uid, reviewUpdates) =>
//     reviewsModel.updateOne({ _id: uid }, { $set: reviewUpdates });
