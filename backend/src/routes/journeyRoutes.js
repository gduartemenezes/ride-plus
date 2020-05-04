const express = require('express');
const journeyController = require('./../controllers/journeyController');

const router = express.Router();

router.route('/').post(journeyController.createJourney);


module.exports = router;