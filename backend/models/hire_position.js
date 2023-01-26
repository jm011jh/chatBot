const mongoose = require("mongoose");

var HirePositionSchema = new mongoose.Schema({
    id : { type: Number, required: true },
    name : { type: String, required: true },
},{collection: 'hire_position'})

module.exports = mongoose.model("HirePosition",HirePositionSchema)