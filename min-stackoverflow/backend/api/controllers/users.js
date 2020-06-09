const bcrypt = require('bcrypt');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const User = require('../../models').User;
require('dotenv').config();

exports.registerUser = (req, res, next) => {
  User.create(req.body)
    .then((createdUser) => {
      return res.status(201).send(createdUser);
    })
    .catch((error) => {
      if (error.name == 'SequelizeValidationError') {
        next(createError(400, error.message));
        return;
      }
      next(error);
    });
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
    { expiresIn: '86400s' }
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
