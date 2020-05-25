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

// update

// delete
