const express = require("express");
const contactRoute = express.Router();
const appControl = require("../controller/index").contactController;

contactRoute.route("/contact").get(appControl.allContact); // read all
contactRoute.route("/contact").post(appControl.createContact); // create
contactRoute.route("/contact/:id").get(appControl.showContact); // read single
contactRoute.route("/contact/:id").patch(appControl.updateContact); // update
contactRoute.route("/contact/:id").delete(appControl.deleteContact); // delete

module.exports = contactRoute;