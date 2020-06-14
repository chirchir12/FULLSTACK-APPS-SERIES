const createError = require('http-errors');
const Problem = require('../../models').Problem;
const Solution = require('../../models').Solution;
const User = require('../../models').User;

//1. create
exports.createProblem = (req, res, next) => {
  Problem.create({
    ...req.body,
    userId: req.user.id,
  })
    .then((problemCreated) => res.status(201).send(problemCreated))
    .catch((error) => {
      if (error.name == 'SequelizeValidationError') {
        next(createError(400, error.message));
        return;
      }
      next(error);
    });
};
//2. get all
exports.ProblemsList = (req, res, next) => {
  Problem.findAll({
    include: [{ model: User }, { model: Solution, include: [User] }],
  })
    .then((problems) => {
      if (!problems > 0) {
        throw createError(404, 'not found');
      }
      res.status(200).send(problems);
    })
    .catch((error) => next(error));
};
//3. get single
exports.getSingleProblem = (req, res, next) => {
  Problem.findOne({
    where: { id: req.params.id },
    include: [{ model: User }, { model: Solution, include: [User] }],
  })
    .then((problem) => {
      if (!problem) {
        throw createError(404, 'not found');
      }
      res.status(200).send(problem);
    })
    .catch((error) => next(error));
};
//4. update
exports.updateProblem = async (req, res, next) => {
  try {
    const Problemexist = await Problem.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });
    if (!Problemexist) {
      throw createError(404, 'not found');
    }
    const Problemupdate = await Problem.update(req.body, {
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });
    if (!Problemupdate) {
      throw createError(400, 'fields cannot be null');
    }
    return res.status(200).send({ message: 'record updated successfully' });
  } catch (error) {
    if (error.name == 'SequelizeValidationError') {
      next(createError(400, error.message));
      return;
    }
    next(error);
  }
};
//5. delete
exports.deleteProblem = (req, res) => {
  Problem.destroy({
    where: {
      id: req.params.id,
      userId: req.user.id,
    },
  })
    .then((row) => {
      if (!row) {
        throw createError(404, 'not found');
      }
      res.status(200).send({ message: 'record deleted' });
    })
    .catch((error) => next(error));
};
