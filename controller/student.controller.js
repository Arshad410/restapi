const StudentModel = require("../model/index").student;
const assert = require("assert");

module.exports = {
    allStudent: (req, res) => {
        // read all student info
        StudentModel.find( (err, response) => {
            if (err) assert.equal(err, null);
            res.json(response);
        });
    },
    createStudent: (req, res) => {
        // adding new contact to db
        let student = new StudentModel(req.body);

        student.save().then((response) => {
            res.status(200).json({ code: 200, message: "New student Created" });
        }).catch((err) => {
            res.status(200).json({ code: 301, message: "unable to save student" });
        });
    },
    showStudent: (req, res) => {
        // viewing single student info
        let id = req.params.id;
        StudentModel.findById({ _id: id }, (err, data) => {
            if (err) assert.equal(err, null);
            res.json(data);
        });
    },
    updateStudent: (req, res) => {
        let id = req.params.id; // read id from url address

        let student = new StudentModel(req.body);

        StudentModel.findById({ _id: id },(err,response) => {
            if(err) assert.equal(null, err);
            if(!response) {
                res.status(200).json({ code:301, message: 'No data found..'});
            } else {
                response.studentId = req.body.studentId;
                response.name = req.body.name;
                response.gender = req.body.gender;
                response.phone = req.body.phone;
                response.email = req.body.email;
                response.courseId = req.body.courseId;
                response.status = req.body.status;
                response.address = req.body.address;

                response.save().then( obj => {
                    res.status(200).json({ code: 200, message: 'Successfully updated' });
                }).catch((err) => {
                    assert.equal(null, err);
                    res.status(200).json({ code: 301, message: "Unable to update" });
                });
            }
        });
    },
    deleteStudent: (req, res) => {
        let id = req.params.id;

        StudentModel.findByIdAndDelete({ _id: id }, (err, response) => {
            if (err) {
                assert.equal(null, err);
                res.status(200).json({ code: 301, message: "Unable to delete" });
            } else {
                res.status(200).json({ code: 200, message: "Student deleted successfully" });
            }
        });
    },
};

