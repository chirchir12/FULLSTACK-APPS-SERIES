const Problem = require('../../models').Problem;
const Solution = require('../../models').Solution;
const User = require('../../models').User;

//1. create
exports.createProblem = (req, res) => {
  Problem.create({
    ...req.body,
    userId: '61bf808c-a31f-4406-821e-689726808402',
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
//5. delete
