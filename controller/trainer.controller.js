const TrainerModel = require("../model/index").trainer;
const assert = require("assert");

module.exports = {
    allTrainer: (req, res) => {
        // read all trainers
        TrainerModel.find( (err, response) => {
            if (err) assert.equal(err, null);
            res.json(response);
        });
    },
    createTrainer: (req, res) => {
        // adding new trainer info to db
        let trainer = new TrainerModel(req.body);

        trainer.save().then((response) => {
            res.status(200).json({ code: 200, message: "New trainer Created" });
        }).catch((err) => {
            res.status(200).json({ code: 301, message: "unable to save trainer info" });
        });
    },
    showTrainer: (req, res) => {
        // viewing single trainer info
        let id = req.params.id;
        TrainerModel.findById({ _id: id }, (err, data) => {
            if (err) assert.equal(err, null);
            res.json(data);
        });
    },
    updateTrainer: (req, res) => {
        let id = req.params.id; // read id from url address

        let trainer = new TrainerModel(req.body);

        TrainerModel.findById({ _id: id },(err,response) => {
            if(err) assert.equal(null, err);
            if(!response) {
                res.status(200).json({ code:301, message: 'No data found..'});
            } else {
                response.trainerId = req.body.trainerId;
                response.name = req.body.name;
                response.skills = req.body.skills;
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
    deleteTrainer: (req, res) => {
        let id = req.params.id;

        TrainerModel.findByIdAndDelete({ _id: id }, (err, response) => {
            if (err) {
                assert.equal(null, err);
                res.status(200).json({ code: 301, message: "Unable to delete" });
            } else {
                res.status(200).json({ code: 200, message: "Trainer deleted successfully" });
            }
        });
    },
};

