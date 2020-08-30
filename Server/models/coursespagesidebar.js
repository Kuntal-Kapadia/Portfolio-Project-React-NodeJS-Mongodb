const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const coursespagesidebarSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    Checkboxes: {
        type: [String],
        required: true
    }
}, {
    timestamps: true
});

const Coursespagesidebar = mongoose.model('Coursespagesidebar', coursespagesidebarSchema);

module.exports = Coursespagesidebar;