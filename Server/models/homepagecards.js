const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const homepagecardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Homepagecards = mongoose.model('Homepagecards', homepagecardSchema);

module.exports = Homepagecards;