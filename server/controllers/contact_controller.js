const { contact } = require('../models/contact_schema');

exports.saveResponse = (req, res) => {
    console.log(req.body);
    contact.create(req.body)
    .then(() => {
        res.send({
            'status': 'ok'
        });
    })
    .catch(err => {
        console.error(err);
    })
};