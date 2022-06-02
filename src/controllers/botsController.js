const Bot = require('../../models/Bot')

const botsController = {

  createBot: (req, res) => {
    const { body: { name, creatorFirstName, creatorLastName } } = req
    const botToSave = new Bot({ name, creatorFirstName, creatorLastName })
    botToSave.save()
      .then(botSaved => res.json({ success: true, response: botSaved }))
      .catch(err => res.json({ success: false, response: err }))
  }
}

module.exports = botsController
