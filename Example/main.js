const express = require("express");
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send("hello world");
});



app.listen(port, () => {
    console.log("server up and running at http://localhost:${port}");
});

