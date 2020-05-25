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
  LangCategory.findAll({ attributes: ['name'] })
    .then((languages) => res.status(200).json(languages))
    .catch((error) => res.status(404).json({ error: error }));
};

// update

// delete
