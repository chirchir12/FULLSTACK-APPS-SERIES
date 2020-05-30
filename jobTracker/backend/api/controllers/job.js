const Job = require('../../models').Job;

//create
exports.createJob = (req, res) => {
  const { title, company, site } = req.body;
  Job.create({ title, company, site })
    .then((created) => res.status(201).json(created))
    .catch((error) => res.json(400).json(error));
};
// update
// delete
// put
