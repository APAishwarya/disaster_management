// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const reportRoutes = require('./routes/reportRoutes');  // Moved import after Express is set up

// const app = express();  // Initialize 'app' here
// app.use(cors());
// app.use(bodyParser.json());

// const PORT = process.env.PORT || 5000;

// // MongoDB connection


// mongoose.connect('mongodb+srv://aishwaryaapmanoj:disastermanagement@cluster0.ssebs.mongodb.net/disasterManagementDB?retryWrites=true&w=majority' 
// ).then(() => {
//     console.log('Connected to MongoDB Atlas');
// }).catch(err => {
//     console.error('Error connecting to MongoDB Atlas:', err);
// });


// // Route setup
// app.use('/api/reports', reportRoutes);  // Now 'app' is already initialized

// // Basic route to test server
// app.get('/', (req, res) => {
//   res.send('Disaster Management Portal Backend');
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const alertRoutes = require('./routes/alertRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');
const requestRoutes = require('./routes/requestRoutes');

const app = express();
app.use(express.json()); // For parsing application/json

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/alerts', alertRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/requests', requestRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
