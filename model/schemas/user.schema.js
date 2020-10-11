/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator")

const userSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true
    },
    lastName: {
        type: "String",
        required: true
    },
    userName: {
        type: "String",
        required: true,
        unique: true
    },
    password: {
        type: "String",
        required: true
    },
    role: {
        type: "Number",
        required: true
    }
});
userSchema.plugin(validator);
module.exports = userSchema;