/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")

const departmentSchema = new mongoose.Schema({
    code: {
        type: "String",
        required: true,
        unique: true
    },
    name: {
        type: "String",
        required: true,
        unique: true
    },
    named: {
        type: "String",
        required: true
    },
    faculty_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_faculty",
        required: true
    }

});
departmentSchema.plugin(validator);
module.exports = departmentSchema;