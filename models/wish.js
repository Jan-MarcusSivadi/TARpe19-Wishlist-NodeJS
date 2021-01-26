/// Imports
const fs = require('fs');
const path = require('path');
const { callbackify } = require('util');
const filePath = path.join(path.dirname(require.main.filename), 'data', 'wishes.json');

/// Export Wish class
module.exports = class Wish {

    // constrtuctor
    constructor(description_, price_) {
        this.description = description_;
        this.price = price_;
    }

    // saveWish method
    saveWish() {
        fs.readFile(filePath, (error, fileContent) => {
            let wishes = [];

            if (!error) {
                wishes = JSON.parse(fileContent);
            } else {
                console.log(error);
            }

            wishes.push(this);
            fs.writeFile(filePath, JSON.stringify(wishes), (error) => {
                if (!error) console.log('CREATE: ' + 'File Write success.');
                else console.log(error);
            });
        });
    }

    static fetchWishes(callBack) {
        fs.readFile(filePath, (error, fileContent) => {
            if (error) {
                console.log('READ: ' + 'Wishes fetch failed.');
                callBack([]);
            }

            console.log('READ: ' + 'Wishes fetch success.');
            callBack(JSON.parse(fileContent));
        });
    }
}

//{description: "Wish1", "price" : 25} - json
//{"description": "Wish1" "price" : 25} - js object