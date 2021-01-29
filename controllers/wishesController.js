const Wish = require('../models/wish');

/// Exports
// Render main Page
exports.getMainPage = (req, res) => {
    Wish.fetchWishes(wishes => {

        console.log(wishes);
        res.render('index.ejs', {wishItems : wishes});
    });
};
// POST new Task
exports.postNewWish = (req, res) => {
    let item = new Wish(req.body.newWish, req.body.newPrice);
    item.saveWish();
    res.redirect('/');
};
// Delete Task
exports.deleteWish = (req, res) =>{
    Wish.deleteWish(req.body.wishDelete);
    res.redirect('/');
};