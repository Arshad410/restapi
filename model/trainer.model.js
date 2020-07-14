const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Trainer = new Schema(
    {
        trainerId: { type: String, required: true, unique: true },
        name: { type: String, required: true, minlength: 4 },
        skills: { type: Array, required: true },
        gender: {type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        createdAt: { type: Date, default: Date.now },
    },
    { collection: "trainer" }
);

module.exports = mongoose.model("Trainer", Trainer);