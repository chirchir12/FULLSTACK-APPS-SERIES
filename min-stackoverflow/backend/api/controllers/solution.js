const Solution = require('../../models').Solution;

exports.createSolution = (req, res) => {
  Solution.create({
    ...req.body,
    userId: '61bf808c-a31f-4406-821e-689726808402',
  })
    .then((created) => res.status(201).json({ created }))
    .catch((error) => res.status(400).json({ error: error }));
};

exports.updateSolution = async (req, res) => {
  try {
    const solutionexit = await Solution.findOne({
      where: {
        id: req.params.id,
        userId: '61bf808c-a31f-4406-821e-689726808402',
      },
    });
    if (!solutionexit) {
      throw new Error('Language with this info does not exist');
    }
    const solutionupdate = await Solution.update(req.body, {
      where: {
        id: req.params.id,
        userId: '61bf808c-a31f-4406-821e-689726808402',
      },
    });
    if (!solutionupdate) {
      throw new Error('Bad request');
    }
    return res.status(200).json({ message: 'record updated successfully' });
  } catch (error) {
    return res.status(400).json(error);
  }
};
