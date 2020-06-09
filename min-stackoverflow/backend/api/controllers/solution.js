const Solution = require('../../models').Solution;
const createError = require('http-errors');

exports.createSolution = (req, res, next) => {
  Solution.create({
    ...req.body,
    userId: req.user.id,
  })
    .then((created) => res.status(201).send({ created }))
    .catch((error) => {
      if (error.name == 'SequelizeValidationError') {
        next(createError(400, error.message));
        return;
      }
      next(error);
    });
};

exports.updateSolution = async (req, res, next) => {
  try {
    const solutionexit = await Solution.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });
    if (!solutionexit) {
      throw createError(404, 'SOlution not found');
    }
    const solutionupdate = await Solution.update(req.body, {
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });
    if (!solutionupdate) {
      throw createError(400, 'all fields are required');
    }
    return res.status(200).send({ message: 'record updated successfully' });
  } catch (error) {
    next(error);
  }
};

exports.deleteSolution = (req, res, next) => {
  Solution.destroy({
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
