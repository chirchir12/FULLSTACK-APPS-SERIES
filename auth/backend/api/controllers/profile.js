const User = require('../../models').User;
const Profile = require('../../models').Profile;

exports.getUserProfile = async (req, res) => {
  const UserProfile = await User.findOne({
    where: { id: req.user.id },
    include: [Profile],
  });
  if (!UserProfile) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(200).json(UserProfile.dataValues);
};

exports.updateUserProfile = async (req, res) => {
  try {
    //1. search for the profile
    const profile = await Profile.findOne({ where: { userId: req.user.id } });
    if (!profile) {
      throw res.status(404).json({ error: 'user could not be found' });
    }

    //2. if found update else throw
    const updated = await Profile.update(req.body, {
      where: { userId: req.user.id },
    });
    res.status(200).json({ message: 'record updated successfully' });
  } catch (error) {
    res.json({ error: error });
  }
  //1. find user
};
