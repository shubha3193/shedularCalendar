const appointment = require('../models/appointment');

const getAllAppointment = async (req, res) => {
  try {
    const data = await appointment.getAllAppointment();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await appointment.getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createAppointment = async (req, res) => {
  try {
    const { userId, Subject,StartTime,EndTime,IsAllDay } = req.body;
    const id = await appointment.createAppointment(userId, Subject,StartTime,EndTime,IsAllDay);
    res.status(201).json({ id: id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    await appointment.deleteUserById(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
    getAllAppointment,
  getUserById,
  createAppointment,
  deleteUserById,
};
