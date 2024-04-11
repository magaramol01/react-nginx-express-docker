const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

// Use CORS for all routes and origins
app.use(cors());

// Define a route that handles GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello from Express server');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
