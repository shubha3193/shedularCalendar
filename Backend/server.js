const express = require('express');
const cors = require('cors');
// const userRoutes = require('./routes/userRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/appointment', appointmentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
