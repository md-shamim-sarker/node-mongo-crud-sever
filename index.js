const express = require('express');
require('colors');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("This server is running fine!!!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`.black.bgCyan);
});