const mongoose = require("mongoose");
const ContactSchema = mongoose.Schema;

let Contact = new ContactSchema(
    {
        name: { type: String, required: true, minlength: 4 },
        gender: {type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        createdAt: { type: Date, default: Date.now },
    },
    { collection: "contacts" }
);

module.exports = mongoose.model("Contact", Contact);