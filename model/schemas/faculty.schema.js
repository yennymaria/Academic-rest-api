/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")

const facultySchema = new mongoose.Schema({
    code: {
        type: "String",
        required: true,
        unique: true
    },
    namef: {
        type: "String",
        required: true,
        unique: true
    },
    named: {
        type: "String",
        required: true,
    }
});
facultySchema.plugin(validator);
module.exports = facultySchema;