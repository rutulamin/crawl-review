const crawlMiddleware = {};

crawlMiddleware.reviewMiddleware = async (req, res, next) => {
    try {
        const { reviewPageURL } = req.query;
        if (reviewPageURL) {
            next();
        } else {
            return res.status(422).json({
                data: { msg: "Review page URL is required" },
                status: false,
            });
        }
    } catch (err) {
        console.log('Error', err);
        return res.status(500).json({
            errors: { msg: "Internal server error!" },
            status: false,
        });
    }
};

module.exports = crawlMiddleware;