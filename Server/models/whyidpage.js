const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const whyidpageSchema = new Schema({
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
    img1: {
        type: String,
        required: true
    },
    img2: {
        type: String,
        required: true
    },
    img3: {
        type: String,
        required: true
    },
    img4: {
        type: String,
        required: true
    },
    video1: {
        type: String,
        required: true
    }
}, 
{
    collection: 'whyidpage',
    timestamps: true
});

const Whyidpage = mongoose.model('Whyidpage', whyidpageSchema);

module.exports = Whyidpage;