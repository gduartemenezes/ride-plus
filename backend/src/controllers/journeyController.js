const connection = require('./../database/connection');

exports.createJourney = async (req,res) => {
    try {
        const newJourney = req.body;
        newJourney.user_id = req.headers.authorization

        const result = await connection('journeys').insert(newJourney);

        res.status(200).json({
            status: 'sucess',
            journey: {
                id: result,
                newJourney
            }
        });
        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
}