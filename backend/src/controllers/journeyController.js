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

exports.getAllJourneys = async (req, res) => {
    try {
        const allJourneys = await connection('journeys').join('users', 'users.id', '=', 'journeys.user_id').select('users.name', 'users.whatsapp', 'users.email', 'users.city', 'journeys.*');

        res.status(200).json({
            status: 'success',
            allJourneys
        });
        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
}

exports.deleteJourney = async (req, res) => {
    try { 
        const { id } = req.params; 
        const userId = req.headers.authorization;

        const journey = await connection('journeys').where('id', id).select('user_id').first();

        if(journey.user_id !== userId) {
            return res.status(401).json({
                message: 'You have no authorization to delete this journey'
            })
        }

        await connection('journeys').where('id', id).delete();

        res.status(204).json({
            status: 'success',
            message: 'Journey Deleted'
        })


        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}