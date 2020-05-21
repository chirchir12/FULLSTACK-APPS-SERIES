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

    //get user data
    const { firstName, lastName, email, password } = req.body;
    // get profile data
    const { address, residence, phone, avatar } = req.body.Profile;
    const userupdated = await User.update(
      { firstName, lastName, email, password },
      {
        where: { id: req.user.id },
      }
    );
    if (userupdated) {
      const updated = await Profile.update(
        { address, residence, phone, avatar },
        {
          where: { userId: req.user.id },
        }
      );
      if (updated) {
        res.status(200).json({ message: 'record updated successfully' });
      }
    } else {
      throw res.status(400).json({ error: 'bad request user not updated' });
    }
  } catch (error) {
    res.json({ error: error });
  }
  //1. find user
};
