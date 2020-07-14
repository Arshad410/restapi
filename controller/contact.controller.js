const ContactModel = require("../model/index").contact;
const assert = require("assert");

module.exports = {
    allContact: (req, res) => {
        // read all contacts
        ContactModel.find( (err, response) => {
            if (err) assert.equal(err, null);
            res.json(response);
        });
    },
    createContact: (req, res) => {
        // adding new contact to db
        let contact = new ContactModel(req.body);

        contact.save().then((response) => {
            res.status(200).json({ code: 200, message: "Contact Created" });
        }).catch((err) => {
            res.status(200).json({ code: 301, message: "unable to save contact" });
        });
    },
    showContact: (req, res) => {
        // viewing single contact info
        let id = req.params.id;
        ContactModel.findById({ _id: id }, (err, data) => {
            if (err) assert.equal(err, null);
            res.json(data);
        });
    },
    updateContact: (req, res) => {
        let id = req.params.id; // read id from url address

        let contact = new ContactModel(req.body);

        ContactModel.findById({ _id: id },(err,response) => {
            if(err) assert.equal(null, err);
            if(!response) {
                res.status(200).json({ code:301, message: 'No data found..'});
            } else {
                response.name = req.body.name;
                response.gender = req.body.gender;
                response.phone = req.body.phone;
                response.email = req.body.email;

                response.save().then( obj => {
                    res.status(200).json({ code: 200, message: 'Successfully updated' });
                }).catch((err) => {
                    assert.equal(null, err);
                    res.status(200).json({ code: 301, message: "Unable to update" });
                });
            }
        });
    },
    deleteContact: (req, res) => {
        let id = req.params.id;

        ContactModel.findByIdAndDelete({ _id: id }, (err, response) => {
            if (err) {
                assert.equal(null, err);
                res.status(200).json({ code: 301, message: "Unable to delete" });
            } else {
                res.status(200).json({ code: 200, message: "Contact deleted successfully" });
            }
        });
    },
};

