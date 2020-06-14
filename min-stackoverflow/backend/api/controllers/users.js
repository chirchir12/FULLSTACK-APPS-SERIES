const bcrypt = require('bcrypt');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const User = require('../../models').User;
require('dotenv').config();

exports.registerUser = (req, res, next) => {
  // check if email exist in email
  const { email } = req.body;
  User.findOne({ where: { email: email } })
    .then((userExist) => {
      if (userExist) {
        throw createError(401, 'User with this email already exist');
      }
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
    })
    .catch((error) => next(error));
};

exports.loginUser = async (req, res, next) => {
  //1, check user email if exist
  const { email, password } = req.body;
  if (!email || !password) {
    const error = createError(400, 'All fields are required');
    next(error);
    return;
  }
  const userExist = await User.findOne({ where: { email: email } });
  if (!userExist) {
    const error = createError(401, 'User with this email does not exit');
    next(error);
    return;
  }
  //2. compare password
  const passwordMatch = await bcrypt.compare(
    password,
    userExist.dataValues.password
  );
  if (!passwordMatch) {
    const error = createError(401, 'Password given is wrong');
    next(error);
    return;
  }
  //3. create access token
  const token = jwt.sign(
    { id: userExist.dataValues.id },
    process.env.TOKEN_SECRET,
    { expiresIn: '86400s' }
  );
  //4. authourize
  return res.status(200).send({
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
