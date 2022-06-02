const mongoose = require('mongoose')

const botSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  creatorFirstName: { type: String, required: true },
  creatorLastName: { type: String, required: true },
}, { timestamps: true })

const Bot = mongoose.model('bot', botSchema)

module.exports = Bot
