const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/WishListDB', { useNewUrlParser: true, useUnifiedTopology: true } );
require('./wish');