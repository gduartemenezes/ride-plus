const connection = require('../database/connection');
const crypto = require('crypto');

exports.createUser = async (req, res) => {
    try {
        const newUser = req.body;
        newUser.id = crypto.randomBytes(4).toString('HEX');

        await connection('users').insert(newUser);

        res.status(200).json({
            status: 'success',
            id: newUser.id
        });

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}