const { response } = require('express');

const mongoose = require('mongoose');
const Wish = mongoose.model('Wish');

/// Exports
// Render main Page
exports.getMainPage = (req, res) => {

    Wish.find((error, wishes) => {
        if (!error) {
            console.log(wishes);

            let total = 0;
            wishes.forEach(wish => {
                total += parseFloat(wish.price);
            });
            total = total.toFixed(2);
            console.log("Total price: " + total);

            res.render('index.ejs', { wishItems: wishes, TotalPrice: total });
        }
        else {
            console.log('Failed to retrieve data.');
        }
    });

};

// POST new Task
exports.postNewWish = (req, res) => {
    let fieldDescription = req.body.newWish;//!!
    let fieldPrice = req.body.newPrice;//!!

    let newWish = new Wish();
    newWish.description = fieldDescription;
    newWish.price = fieldPrice;

    newWish.save((error, response) => {
        if (!error) {
            res.redirect('/');
        }
        else {
            console.log("Failed to save data.");
        }
    })
};
// Delete Task
exports.deleteWish = (req, res) => {
    const wishItemId = req.body.wishDelete;

    Wish.findByIdAndRemove(wishItemId, (error) => {
        if(!error){
            res.redirect('/');
        } else {
            console.log("Failed to remove an item.");
        }
    })
};