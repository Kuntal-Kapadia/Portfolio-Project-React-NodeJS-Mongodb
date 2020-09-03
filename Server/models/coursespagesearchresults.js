const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const coursespagesearchresultsSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    filter: {
        type: String,
        required: true
    },
    ages: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
}, {
    collection: 'coursespagesearchresults',
    timestamps: true
});

const Coursespagesearchresults = mongoose.model('Coursespagesearchresults', coursespagesearchresultsSchema);

module.exports = Coursespagesearchresults;