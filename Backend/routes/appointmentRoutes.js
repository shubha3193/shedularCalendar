const express = require('express');
const {
  getAllAppointment,
  getUserById,
  createAppointment,
  deleteUserById,
} = require('../controllers/appointmentController');

const router = express.Router();

router.get('/getAllAppointment', getAllAppointment);
router.get('/:id', getUserById);
router.post('/createAppointment', createAppointment);
router.delete('/:id', deleteUserById);

module.exports = router;
