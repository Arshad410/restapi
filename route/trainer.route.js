const express = require("express");
const trainerRoute = express.Router();
const appControl = require("../controller/index").trainerController;

trainerRoute.route("/trainer").get(appControl.allTrainer); // read all
trainerRoute.route("/trainer").post(appControl.createTrainer); // create
trainerRoute.route("/trainer/:id").get(appControl.showTrainer); // read single
trainerRoute.route("/trainer/:id").patch(appControl.updateTrainer); // update
trainerRoute.route("/trainer/:id").delete(appControl.deleteTrainer); // delete

module.exports = trainerRoute;