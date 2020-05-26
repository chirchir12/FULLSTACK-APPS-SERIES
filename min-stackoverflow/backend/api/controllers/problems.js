const Problem = require('../../models').Problem;
const Solution = require('../../models').Solution;
const User = require('../../models').User;

//1. create
exports.createProblem = (req, res) => {
  Problem.create({
    ...req.body,
    userId: req.user.id,
  })
    .then((problemCreated) =>
      res
        .status(201)
        .json({ problemCreated, message: 'problem created succesully' })
    )
    .catch((error) => res.status(400).json(error));
};
//2. get all
exports.ProblemsList = (req, res) => {
  Problem.findAll({
    include: [{ model: User }, { model: Solution, include: [User] }],
  })
    .then((problems) => res.status(200).json(problems))
    .catch((error) => res.status(404).json(error));
};
//3. get single
exports.getSingleProblem = (req, res) => {
  Problem.findOne({
    where: { id: req.params.id },
    include: [{ model: User }, { model: Solution, include: [User] }],
  })
    .then((problem) => res.status(200).json(problem))
    .catch((error) => res.status(404).json(error));
};
//4. update
exports.updateProblem = async (req, res) => {
  try {
    const Problemexist = await Problem.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });
    if (!Problemexist) {
      throw new Error('Language with this info does not exist');
    }
    const Problemupdate = await Problem.update(req.body, {
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });
    if (!Problemupdate) {
      throw new Error('Bad request');
    }
    return res.status(200).json({ message: 'record updated successfully' });
  } catch (error) {
    return res.status(400).json(error);
  }
};
//5. delete
exports.deleteProblem = (req, res) => {
  Problem.destroy({
    where: {
      id: req.params.id,
      userId: '61bf808c-a31f-4406-821e-689726808402',
    },
  })
    .then(() => res.status(200).json({ message: 'record deleted' }))
    .catch((error) => res.status(404).json({ error: error }));
};
