const User = require('../../models').User
const Profile = require('../../models').Profile

exports.registerUser = (req, res) => {
    User.create(req.body)
        .then(createdUser => {
            Profile.create({ userId: createdUser.id })
            return res.status(201).json({
                user: createdUser,
                message: 'user created successfully'
            })
        })
        .catch(error => res.status(400).json({ error: error }))

}

exports.loginUser = (req, res) => {

}