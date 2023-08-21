const express = require('express');
const cors = require('cors'); // Make sure to require cors

const app = express();
app.use(express.json());

// Add CORS middleware configuration
app.use(cors({
  origin: 'http://127.0.0.1:5500', // Match the client-side URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.post('/test', (req, res) => {
  console.log('Test request received:', req.body);
  res.status(200).json({ message: 'Test successful' });
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
