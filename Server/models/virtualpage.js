const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const virtualpageSchema = new Schema({
    headerimg: {
        type: String,
        required: true
    },
    headertxth: {
        type: String,
        required: true
    },
    headertxtp: {
        type: String,
        required: true
    },
    virtualcampimg: {
        type: String,
        required: true
    }
}, {
    collection: 'virtualpage',
    timestamps: true
});

const Virtualpage = mongoose.model('Virtualpage', virtualpageSchema);

module.exports = Virtualpage;