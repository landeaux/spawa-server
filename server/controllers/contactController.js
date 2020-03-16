const mongoose = require('mongoose');
const hubspot = require('../hubspot');

const User = mongoose.model('User');

// Get contact by user ID
exports.getContactByUserId = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.sendStatus(400);
    const user = await User.findById(id);
    if (user) {
      const { email } = user;
      const contact = await hubspot.contacts.getByEmail(email);
      if (contact) {
        return res.status(200).json({ contact });
      }
      return res.sendStatus(404); // contact not found
    }
    return res.sendStatus(404); // user not found
  } catch (error) {
    return next(error);
  }
};
