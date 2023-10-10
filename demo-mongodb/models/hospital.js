const mongoose = require('mongoose');
const { Schema } = mongoose;

const HospitalSchema = new Schema({
    name: { type: String, required: true }
});

module.exports = mongoose.model('Hospital', HospitalSchema);