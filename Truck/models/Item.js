const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ItemSchema = new Schema({

    vehiclenumber: {
        type: Number,
        required: true
    },
    drivername: { 
        type: String,
        required: true},
    driverphonenumber: { 
        type: Number,
        required: true},
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);