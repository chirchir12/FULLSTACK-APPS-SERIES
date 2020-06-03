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
exports.updateJob = (req, res, next) => {
  const { title, company, site, response, responsibility } = req.body;
  if (!title || !company || !site) {
    throw createError(400, 'all fields are required');
  }
  Job.update(
    { title, company, site, response, responsibility },
    { where: { id: +req.params.id } }
  )
    .then((updated) => res.status(200).json(updated))
    .catch((error) => next(error));
};
// all
exports.getALLJobs = (req, res, next) => {
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
        throw createError(404, 'jobs not found');
      }
      return res.status(200).json(jobs);
    })
    .catch((error) => next(error));
};

exports.getSingleJobs = (req, res, next) => {
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
      if (!jobs) {
        throw createError(404, 'job not found');
      }
      return res.status(200).json(jobs);
    })
    .catch((error) => next(error));
};
// delete
exports.deleteJob = (req, res, next) => {
  Job.destroy({ where: { id: +req.params.id } })
    .then((obj) => res.status(200).json(obj))
    .catch((error) => next(createError(404, 'not found')));
};
// patch
exports.updateResponse = (req, res, next) => {
  const { response } = req.body;
  Job.update({ response }, { where: { id: +req.params.id } })
    .then((updated) => res.status(200).json(updated))
    .catch((error) => next(createError(400, 'something happended')));
};
