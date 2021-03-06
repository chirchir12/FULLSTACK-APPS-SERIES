const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models').User;
const Profile = require('../../models').Profile;
require('dotenv').config();

exports.registerUser = (req, res) => {
  User.create(req.body)
    .then((createdUser) => {
      Profile.create({ userId: createdUser.id });
      return res.status(201).json({
        user: createdUser,
        message: 'user created successfully',
      });
    })
    .catch((error) => res.status(400).json({ error: error }));
};

exports.loginUser = async (req, res) => {
  //1, check user email if exist
  const { email, password } = req.body;
  if (!email && !password) {
    return res.status(401).json({ error: 'Fields are required' });
  }
  const userExist = await User.findOne({ where: { email: email } });
  if (!userExist) {
    return res
      .status(401)
      .json({ error: 'User with this email does not exist' });
  }
  //2. compare password
  const passwordMatch = await bcrypt.compare(
    password,
    userExist.dataValues.password
  );
  if (!passwordMatch) {
    return res.status(401).json({ error: 'Password is wrong' });
  }
  //3. create access token
  const token = jwt.sign(
    { id: userExist.dataValues.id },
    process.env.TOKEN_SECRET,
    { expiresIn: '1800s' }
  );
  //4. authourize
  return res.status(200).json({
    user: {
      id: userExist.dataValues.id,
      firstName: userExist.dataValues.firstName,
      lastName: userExist.dataValues.lastName,
      email: userExist.dataValues.email,
    },
    isAuthenticated: true,
    token,
  });
};
