require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://127.0.0.1:3000', // Ensure this matches the client's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));

app.use(express.json());

// Simple GET Endpoint for Testing
app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Test GET successful' });
  res.send('Server is working');
});

// Other Endpoints...
// ...

const PORT = 4001;
const HOST = '127.0.0.1'; // Explicitly set the host

app.listen(PORT, HOST, function() {
  console.log(`Server is running on port ${PORT}`);
});
