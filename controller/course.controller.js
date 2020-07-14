const CourseModel = require("../model/index").course;
const assert = require("assert");

module.exports = {
    allCourse: (req, res) => {
        // read all courses
        CourseModel.find( (err, response) => {
            if (err) assert.equal(err, null);
            res.json(response);
        });
    },
    createCourse: (req, res) => {
        // adding new courses to db
        let course = new CourseModel(req.body);

        course.save().then((response) => {
            res.status(200).json({ code: 200, message: "Course Created" });
        }).catch((err) => {
            res.status(200).json({ code: 301, message: "unable to save course" });
        });
    },
    showCourse: (req, res) => {
        // viewing single course info
        let id = req.params.id;
        CourseModel.findById({ _id: id }, (err, data) => {
            if (err) assert.equal(err, null);
            res.json(data);
        });
    },
    updateCourse: (req, res) => {
        let id = req.params.id; // read id from url address

        let course = new CourseModel(req.body);

        CourseModel.findById({ _id: id },(err,response) => {
            if(err) assert.equal(null, err);
            if(!response) {
                res.status(200).json({ code:301, message: 'No data found..'});
            } else {
                response.courseId = req.body.courseId;
                response.titile = req.body.title;
                response.duration = req.body.duration;
                response.mode = req.body.mode;
                response.price = req.body.price;
                response.trainerId = req.body.trainerId;
                response.modules = req.body.modules;
                response.syllabus = req.body.syllabus;

                response.save().then( obj => {
                    res.status(200).json({ code: 200, message: 'Successfully updated' });
                }).catch((err) => {
                    assert.equal(null, err);
                    res.status(200).json({ code: 301, message: "Unable to update" });
                });
            }
        });
    },
    deleteCourse: (req, res) => {
        let id = req.params.id;

        CourseModel.findByIdAndDelete({ _id: id }, (err, response) => {
            if (err) {
                assert.equal(null, err);
                res.status(200).json({ code: 301, message: "Unable to delete" });
            } else {
                res.status(200).json({ code: 200, message: "Course deleted successfully" });
            }
        });
    },
};

