const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const learningpageSchema = new Schema({
    headerimg: {
        type: String,
        required: true
    },
    virtualcampimg: {
        type: String,
        required: true
    },
    privatelessonimg: {
        type: String,
        required: true
    },
    teacherimg: {
        type: String,
        required: true
    }
}, {
    collection: 'learningpage', 
    timestamps: true
});

const Learningpage = mongoose.model('Learningpage', learningpageSchema);

module.exports = Learningpage;