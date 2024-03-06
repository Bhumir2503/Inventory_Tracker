//imports necessary modules and files
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./backend/routes/userRoute');

// Create an Express application
const app = express();
const port = 8080;

// Connect to the Mongodb database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Database Connected Successfully'))
  .catch(err => console.log(err));

// Use the cors middleware
app.use(cors({
  origin: 'http://localhost:80' // restrict calls to those this address
}));

// Use the express.json() middleware
app.use('/', userRoute);


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});