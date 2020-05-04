const express = require('express');
const journeyController = require('./../controllers/journeyController');

const router = express.Router();

router.route('/').post(journeyController.createJourney).get(journeyController.getAllJourneys);

router.route('/:id').delete(journeyController.deleteJourney);

module.exports = router;