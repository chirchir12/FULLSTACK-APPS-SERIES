const Problem = require('../../models').Problem;

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
//3. get single
//4. update
//5. delete
