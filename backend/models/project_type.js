const mongoose = require("mongoose");

var ProjectTypeSchema = new mongoose.Schema({
    id : { type: Number, required: true },
    name : { type: String, required: true },
},{collection: 'project_type'})

module.exports = mongoose.model("ProjectType",ProjectTypeSchema)