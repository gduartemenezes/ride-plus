const connection = require('../database/connection');

exports.getUserInfo =  async (req, res) => {
    try {
        const id = req.headers.authorization;
        const userInfo = await connection('users').where('id', id).select('*');
        const userJourneys = await connection('journeys').where('user_id', id).select('*')

        res.status(200).json({
            userInfo,
            userJourneys
        })

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
};
