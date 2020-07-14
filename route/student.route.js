const express = require("express");
const studentRoute = express.Router();
const appControl = require("../controller/index").studentController;

studentRoute.route("/student").get(appControl.allStudent); // read all
studentRoute.route("/student").post(appControl.createStudent); // create
studentRoute.route("/student/:id").get(appControl.showStudent); // read single
studentRoute.route("/student/:id").patch(appControl.updateStudent); // update
studentRoute.route("/student/:id").delete(appControl.deleteStudent); // delete

module.exports = studentRoute;