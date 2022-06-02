const express = require ('express');
const router = express.Router();
const infractionsController = require('../src/controllers/infractionsController')
const botsController = require('../src/controllers/botsController')

//INFRACTIONS
router.route('/infraction')
.post(infractionsController.createInfraction)
router.route('/obtenerInfracciones/:userDNI')
.post(infractionsController.findByUserDNI)

//BOTS
router.route('/bot')
.post(botsController.createBot)

module.exports = router
