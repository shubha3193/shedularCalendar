const db = require('../db/connection');

const appointment = {
  getAllAppointment: async () => {
    const [rows] = await db.query('SELECT id,Subject,StartTime,EndTime,IsAllDay FROM appointment');
    return rows;
  },

  getUserById: async (id) => {
    const [rows] = await db.query('SELECT * FROM appointment WHERE id = ?', [id]);
    return rows[0];
  },

  createAppointment: async (userId, Subject,StartTime,EndTime,IsAllDay) => {
    const [result] = await db.query('INSERT INTO appointment (userId, subject,StartTime,EndTime,IsAllDay) VALUES (?, ?,?,?,?)', [userId, Subject,StartTime,EndTime,IsAllDay]);
    return result.insertId;
  },

  deleteUserById: async (id) => {
    await db.query('DELETE FROM appointment WHERE id = ?', [id]);
    return;
  },
};

module.exports = appointment;
