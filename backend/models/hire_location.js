const mongoose = require("mongoose");

var HireLocationSchema = new mongoose.Schema({
    id : { type: Number, required: true },
    name : { type: String, required: true },
},{collection: 'hire_location'})

module.exports = mongoose.model("HireLocation",HireLocationSchema)