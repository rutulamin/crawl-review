const crawlUtils = require("./crawlUtils");

const crawlControllers = {};

crawlControllers.reviewController = async (req, res) => {
    try {
        const { reviewPageURL } = req.query;
        const { status, data, errorMsg } = await crawlUtils.reviews(reviewPageURL);
        if (status === false) {
            return res.status(422).json({
                errors: { msg: errorMsg },
                status: false,
            });
        } else {
            if (data.length > 0) {
                return res.status(200).json({
                    data: { data },
                    status: true,
                });
            } else {
                return res.status(200).json({
                    data: { msg: "No Reviews Found" },
                    status: true,
                });
            }
        }
    } catch (err) {
        console.log('Error at crawlControllers/reviewController', err);
        return res.status(500).json({
            errors: { msg: "Internal server error!" },
            status: false,
        });
    }
};

module.exports = crawlControllers;