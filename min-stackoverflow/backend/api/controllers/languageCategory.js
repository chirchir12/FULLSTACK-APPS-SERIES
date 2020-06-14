const LangCategory = require('../../models').LangCategory;
const createError = require('http-errors');

//create
exports.createLanguageCategory = (req, res, next) => {
  LangCategory.create(req.body)
    .then((created) => res.status(201).send(created))
    .catch((error) => {
      if (error.name == 'SequelizeValidationError') {
        next(createError(400, error.message));
        return;
      }
      next(error);
    });
};
// list
exports.languagesList = (req, res, next) => {
  LangCategory.findAll({ attributes: ['name', 'id'] })
    .then((languages) => {
      if (!languages > 0) {
        throw createError(404, 'Not found');
      }
      res.status(200).send(languages);
    })
    .catch((error) => next(error));
};

// update
exports.updateLanguage = async (req, res, next) => {
  try {
    const langaugeExist = await LangCategory.findOne({
      where: { id: req.params.id },
    });
    if (!langaugeExist) {
      throw createError(404, 'Not found');
    }
    const langaugeUpdate = await LangCategory.update(req.body, {
      where: { id: req.params.id },
    });
    if (!langaugeUpdate) {
      throw createError(400, 'all fields are required');
    }
    return res.status(200).send({ message: 'record updated successfully' });
  } catch (error) {
    if (error.name == 'SequelizeValidationError') {
      next(createError(400, error.message));
      return;
    }
    next(error);
  }
};
// delete
