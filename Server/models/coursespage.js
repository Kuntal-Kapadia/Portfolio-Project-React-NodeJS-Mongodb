const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coursespageSchema = new Schema({
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
    }
}, 
{
    collection: 'coursespage',
    timestamps: true
});

const Coursespage = mongoose.model('Coursespage', coursespageSchema);

module.exports = Coursespage;