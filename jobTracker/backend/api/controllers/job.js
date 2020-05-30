const Job = require('../../models').Job;

//create
exports.createJob = (req, res) => {
  const { title, company, site, link } = req.body;
  if (!title || !company || !site || !link) {
    return res.status(400).json({ error: 'all fields are required' });
  }
  Job.create({ title, company, site, link })
    .then((created) => res.status(201).json(created))
    .catch((error) => res.status(400).json({ error }));
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
exports.getALLJobs = (req, res) => {
  Job.findAll({
    attributes: ['id', 'title', 'company', 'site', 'response', 'createdAt'],
  })
    .then((jobs) => {
      if (jobs.length > 0) {
        return res.status(200).json(jobs);
      }
      res.status(404).json({ message: 'no jobs added yet' });
    })
    .catch((error) => res.status(404).json(error));
};
// delete
exports.deleteJob = (req, res) => {
  Job.destroy({ where: { id: req.body.id } })
    .then((obj) => res.status(200).json(obj))
    .catch((error) => res.json(400).json(error));
};
// patch
exports.updateResponse = (req, res) => {
  const { response } = req.body;
  Job.update({ response }, { where: { id: +req.params.id } })
    .then((updated) => res.status(200).json(updated))
    .catch((error) => res.status(400).json(error));
};
