const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const onlinepageSchema = new Schema({
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
    privatelessonimg: {
        type: String,
        required: true
    }
}, {
    collection: 'onlinepage',
    timestamps: true
});

const Onlinepage = mongoose.model('Onlinepage', onlinepageSchema);

module.exports = Onlinepage;