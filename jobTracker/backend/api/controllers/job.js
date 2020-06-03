const createError = require('http-errors');
const Job = require('../../models').Job;

//create
exports.createJob = (req, res, next) => {
  const { title, company, site, link, responsibility } = req.body;
  if (!title || !company || !site || !link || !responsibility) {
    throw createError(400, 'all fields are required');
  }
  Job.create({ title, company, site, link, responsibility })
    .then((created) => {
      Job.findAll({
        attributes: [
          'id',
          'title',
          'company',
          'site',
          'response',
          'responsibility',
          'link',
          'createdAt',
        ],
      })
        .then((jobs) => {
          if (!jobs) {
            throw createError(404, 'No jobs found');
          }
          return res.status(200).json(jobs);
        })
        .catch((error) => next(error));
    })
    .catch((error) => {
      if (error.name == 'SequelizeValidationError') {
        next(createError(400, error.message));
        return;
      }
      next(error);
    });
};
// update
exports.updateJob = (req, res) => {
  const { title, company, site, response, responsibility } = req.body;
  if (!title || !company || !site) {
    return res.status(400).json({ error: 'all fields are required' });
  }
  Job.update(
    { title, company, site, response, responsibility },
    { where: { id: +req.params.id } }
  )
    .then((updated) => res.status(200).json(updated))
    .catch((error) => res.status(400).json(error));
};
// all
exports.getALLJobs = (req, res) => {
  Job.findAll({
    attributes: [
      'id',
      'title',
      'company',
      'site',
      'response',
      'responsibility',
      'link',
      'createdAt',
    ],
  })
    .then((jobs) => {
      return res.status(200).json(jobs);
    })
    .catch((error) => res.status(404).json(error));
};

exports.getSingleJobs = (req, res) => {
  Job.findOne({
    where: { id: +req.params.id },
    attributes: [
      'id',
      'title',
      'company',
      'site',
      'response',
      'responsibility',
      'link',
      'createdAt',
    ],
  })
    .then((jobs) => {
      return res.status(200).json(jobs);
    })
    .catch((error) => res.status(404).json(error));
};
// delete
exports.deleteJob = (req, res) => {
  Job.destroy({ where: { id: +req.params.id } })
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
