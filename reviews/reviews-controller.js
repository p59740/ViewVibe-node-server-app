import * as dao from "./reviews-dao.js";

const ReviewsController = (app) => {
    const createReview = async (req, res) => {
        const review = req.body;
        const actualReview = await dao.createReview(review);
        res.json(actualReview);
    };

    const findAllReviews = async (req, res) => {
        const params = req.query;
        let reviews = null;
        if (params.imdbID !== undefined) {
            reviews = await dao.findReviewByIMDBID(params.imdbID);
        }
        else if (params.username !== undefined) {
            reviews = await dao.findByUserName(params.username);
        }
        else
        {
            reviews = await dao.findAllReviews();
        }
        reviews.sort((r1, r2) => r2.time - r1.time);
        res.json(reviews);
    };

    const deleteReview = async (req, res) => {
        const rid = req.params.rid;
        const status = await dao.deleteReview(rid);
        res.json(status);
    };

    app.post("/review", createReview);

    app.get("/review", findAllReviews);

    app.delete("/review/:rid", deleteReview);
};

export default ReviewsController;
