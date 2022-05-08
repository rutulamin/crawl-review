const puppeteer = require('puppeteer');
const crawlUtils = {};

crawlUtils.reviews = async (reviewPageURL) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // Handle invalid URL error
    try {
        await page.goto(reviewPageURL, { waitUntil: 'domcontentloaded' });
    } catch (err) {
        console.log('Error at crawlUtils/reviews ', err);
        return {
            status: false,
            errorMsg: "Review page URL is not valid!"
        };
    }
    const reviewBlockSelctor = 'div#CustomerReviewsBlock > div#customerReviews > div#customerReviews';
    const reviewData = await page.$$eval(reviewBlockSelctor, (reviewBlocksElement) => {
        const formattedReviewData = reviewBlocksElement.map(element => {
            return {
                name: element.querySelector('div.leftCol > dl.reviewer > dd:nth-child(2)')?.innerHTML || "-",
                date: element.querySelector('div.leftCol > dl.reviewer > dd:nth-child(4)')?.innerHTML || "-",
                ratings: element.querySelector('div.leftCol > dl.itemReview > dd > div.itemRating > strong')?.innerHTML || "-",
                comment: {
                    title: element.querySelector('div.rightCol > blockquote > h6')?.innerHTML || "-",
                    text: element.querySelector('div.rightCol > blockquote > p')?.innerHTML || "-"
                },
            };
        });
        return formattedReviewData;
    });
    await browser.close();
    return {
        status: true,
        data: reviewData
    };
};

module.exports = crawlUtils;