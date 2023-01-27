const mongoose = require("mongoose");

var RecruitRequestSchema = new mongoose.Schema({
    id : {type : Number, required: true},
    rc_type : {type : Number, required: true},
    user_email : {type : String, required: true},
    user_name : {type : String, required: true},
    user_phone : {type : String, required: true},
    user_pr : {type : String, required: true},
    user_url : {type : String, required: true},
},{collection: 'recruit_request'})

module.exports = mongoose.model("RecruitRequest",RecruitRequestSchema)