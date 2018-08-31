const { contact } = require('../models/contact_schema');
const sendgridClient = require('@sendgrid/mail');

sendgridClient.setApiKey('REDACTED_SENDGRID_KEY');

exports.saveResponse = (req, res) => {
    console.log(req.body);
    contact.create(req.body)
    .then(() => {
        res.send({
            'status': 'ok'
        });
    })    
    const message = {
            to: 'jamesgeorge2021@cs.ajce.in',
            from: req.body.email,
            subject: req.body.subject,
            text: 'Name: ' + JSON.stringify(req.body.name) + '\nEmail: ' + JSON.stringify(req.body.email) + '\nSubject: ' + JSON.stringify(req.body.subject) + '\nMessage: ' + JSON.stringify(req.body.message)
        }
        sendgridClient.send(message);
};