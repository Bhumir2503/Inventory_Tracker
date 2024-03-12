//imports necessary modules and files
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
require('dotenv');

// Create an Express application
const app = express();
const port = process.env.PORT;

// Connect to the Mongodb database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Database Connected Successfully'))
  .catch(err => console.log(err));

// Use the cors middleware
app.use(cors({ 
  origin: '*'
}));

// Use the express.json() middleware
app.use('/', userRoute);

app.get('/test', (req, res) => {
  res.send('hi');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});