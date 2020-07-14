const express = require("express");
const courseRoute = express.Router();
const appControl = require("../controller/index").courseController;

courseRoute.route("/course").get(appControl.allCourse); // read all
courseRoute.route("/course").post(appControl.createCourse); // create
courseRoute.route("/course/:id").get(appControl.showCourse); // read single
courseRoute.route("/course/:id").patch(appControl.updateCourse); // update
courseRoute.route("/course/:id").delete(appControl.deleteCourse); // delete

module.exports = courseRoute;