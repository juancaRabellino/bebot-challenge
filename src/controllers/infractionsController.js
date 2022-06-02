const Infraction = require('../../models/Infraction')

const infractionsController = {

  createInfraction: (req, res) => {
    const { body: { type, description, userDNI } } = req
    const infractionToSave = new Infraction({
      type, description, userDNI
    })
    infractionToSave.save()
      .then(infractionSaved => res.json({ success: true, response: infractionSaved }))
      .catch(err => res.json({ success: false, response: err }))
  },

  findByUserDNI: (req, res) => {
    const { params: { userDNI } } = req
    Infraction.find({ "userDNI": userDNI })
      .then(data => {
        data.length
          ? res.json({ success: true, message: `Lamentamos informarle que tiene infracciones`, infractions: data })
          : res.json({ success: true, message: `Excelente, no tiene infracciones`, infractions: data })
      })
      .catch(err => res.json({ success: false, err }))
  }
}

module.exports = infractionsController
