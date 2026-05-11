// const mongoose = require('mongoose');

// // MongoDB से कनेक्ट करें (अगर लोकल है तो 'mongodb://localhost:27017/cloneDB' यूज़ करें)
// mongoose.connect('your_mongodb_connection_string_here')
// mongoose.connect('mongodb://127.0.0.1:27017/cloneDB')

//   .then(() => console.log('Connected to MongoDB!'))
//   .catch(err => console.error('Could not connect to MongoDB', err));

const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
// सिर्फ एक बार PORT डिक्लेयर करें
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Root
app.get('/', (req, res) => {
  res.json({ message: 'Clone Website API is running 🚀' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

