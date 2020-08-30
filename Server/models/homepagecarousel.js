const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homepagecarouselSchema = new Schema({
    src: {
        type: String,
        required: true
    },
    altText: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    header: {
        type: String,
        required: true
    }
}, {
    collection: 'homepagecarousel',
    timestamps: true
});

const Homepagecarousel = mongoose.model('Homepagecarousel', homepagecarouselSchema);

module.exports = Homepagecarousel;
