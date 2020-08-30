const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const registerpageSchema = new Schema({
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
    registerformimg: {
        type: String,
        required: true
    }
}, {
    collection: 'registerpage',
    timestamps: true
});

const Registerpage = mongoose.model('Registerpage', registerpageSchema);

module.exports = Registerpage;