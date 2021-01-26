const Wish = require('../models/wish');

/// Exports
// Render main Page
exports.getMainPage = (req, res) => {
    Wish.fetchWishes(wishes => {

        console.log(wishes);
        res.render('index.ejs');
    });
};