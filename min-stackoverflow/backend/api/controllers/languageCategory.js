const LangCategory = require('../../models').LangCategory;

//create
exports.createLanguageCategory = (req, res) => {
  LangCategory.create(req.body)
    .then((created) =>
      res.status(201).json({
        created,
        message: 'created successully',
      })
    )
    .catch((error) => {
      return res.status(400).json({
        error: error,
      });
    });
};
// list
exports.languagesList = (req, res) => {
  LangCategory.findAll({ attributes: ['name', 'id'] })
    .then((languages) => res.status(200).json(languages))
    .catch((error) => res.status(404).json({ error: error }));
};

// update
exports.updateLanguage = async (req, res) => {
  try {
    const langaugeExist = await LangCategory.findOne({
      where: { id: req.params.id },
    });
    if (!langaugeExist) {
      throw new Error('Language with this info does not exist');
    }
    const langaugeUpdate = await LangCategory.update(req.body, {
      where: { id: req.params.id },
    });
    if (!langaugeUpdate) {
      throw new Error('Bad request');
    }
    return res.status(200).json({ message: 'record updated successfully' });
  } catch (error) {
    return res.status(400).json(error);
  }
};
// delete
