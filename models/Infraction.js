const mongoose = require('mongoose')

const infractionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  description: { type: String, required: true },
  userDNI: { type: String, required: true }
}, { timestamps: true })

const Infraction = mongoose.model('infraction', infractionSchema)

module.exports = Infraction
