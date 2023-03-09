const express = require('express');

const bookingController = require('../controllers/booking');

const router = express.Router();

router.get('/', bookingController.getBookingUsers);

router.post('/', bookingController.addUserBooking);

router.delete('/:userId', bookingController.deleteUserBooking);

module.exports = router;