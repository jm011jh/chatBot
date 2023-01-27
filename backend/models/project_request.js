const mongoose = require("mongoose");

var ProjectRequestSchema = new mongoose.Schema({
    id : { type: Number, required: true },
    company_email : { type: String, required: true },
    company_name : { type: String, required: true },
    company_phone : { type: String, required: true },
    company_url : { type: String, required: false },
    pj_budget : { type: String, required: true },
    pj_desc : { type: String, required: true },
    pj_period : { type: String, required: true },
    pj_type01 : { type: Number, required: true },
    pj_type02 : { type: String, required: true },
    user_job : { type: String, required: true },
    user_name : { type: String, required: true },
},{collection: 'project_request'})

module.exports = mongoose.model("ProjectRequest",ProjectRequestSchema)