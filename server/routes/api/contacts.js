const router = require('express').Router();

const {
  getContactByUserId,
} = require('../../controllers/contactController');

// Get HubSpot contact by User id
router.get('/:id', getContactByUserId);

module.exports = router;
