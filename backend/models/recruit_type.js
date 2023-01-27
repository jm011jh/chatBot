const mongoose = require("mongoose");

var RecruitTypeSchema = new mongoose.Schema({
    id : { type: Number, required: true },
    name : { type: String, required: true },
},{collection: 'recruit_type'})

module.exports = mongoose.model("RecruitType",RecruitTypeSchema)