const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Student = new Schema(
    {
        studentId: { type: String, required: true, unique: true, minlength: 6, maxlength: 6 },
        name: { type: String, required: true, minlength: 4 },
        gender: {type: String, required: true },
        phone: { type: String, required: true, unique: true },
        email: { type: String, unique: true, required: true },
        courseId: { type: String },
        status: { type: Boolean },
        address: { type: String },
        createdAt: { type: Date, default: Date.now },
    },
    { collection: "student" }
);

module.exports = mongoose.model("Student", Student);