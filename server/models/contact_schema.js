const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({

    email: {
        type: String
    },

    message: {
        type: String
    },

    name: {
        type: String
    },

    subject: {
        type: String
    }

});

const contact = mongoose.model('contactModel', contactSchema);
module.exports = { contact };

