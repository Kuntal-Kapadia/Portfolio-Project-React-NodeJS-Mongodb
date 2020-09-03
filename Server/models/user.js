const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    facebookId: String,
    googleId: String,
    admin: {
        type: Boolean,
        default: false
    }},
    {
        collection: 'users',
        timestamps: true
    });
    


userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);