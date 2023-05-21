const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.end("Hello from server")
  });

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });