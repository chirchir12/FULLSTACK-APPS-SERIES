const Job = require('../../models').Job;

//create
exports.createJob = (req, res) => {
  const { title, company, site } = req.body;
  if (!title || !company || !site) {
    return res.status(400).json({ error: 'all fields are required' });
  }
  Job.create({ title, company, site })
    .then((created) => res.status(201).json(created))
    .catch((error) => res.json(400).json({ ...error }));
};
// update
exports.updateJob = (req, res) => {
  const { title, company, site } = req.body;
  if (!title || !company || !site) {
    return res.status(400).json({ error: 'all fields are required' });
  }
  Job.update({ title, company, site }, { where: { id: +req.params.id } })
    .then((updated) => res.status(200).json(updated))
    .catch((error) => res.status(400).json(error));
};
// all
// delete
// put
