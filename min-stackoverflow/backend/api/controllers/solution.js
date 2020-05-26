const Solution = require('../../models').Solution;

exports.createSolution = (req, res) => {
  Solution.create({
    ...req.body,
    userId: '61bf808c-a31f-4406-821e-689726808402',
  })
    .then((created) => res.status(201).json({ created }))
    .catch((error) => res.status(400).json({ error: error }));
};
