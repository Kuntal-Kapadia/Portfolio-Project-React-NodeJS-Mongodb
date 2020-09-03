const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coursespagesearchresults'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Favorite', favoriteSchema);