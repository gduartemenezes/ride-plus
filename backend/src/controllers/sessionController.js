const connection = require('../database/connection');


exports.startSession = async (req, res) => {
    try {
        const { id } = req.body;
        const user = await connection('users').where('id', id).select('name').first();

        if(!user) res.status(400).json({message: 'Invalid ID, try again'})

        res.status(200).json({
            status: 'success',
            user
        });

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}