const config = require("../config.json");
module.exports = {
    DB: process.env.Dbconnection || config.connection,
};