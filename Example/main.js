const express = require("express");
const fs = require("fs");
const port = 3000;

const app = express();

let totalViews = 0;

app.get('/', (req, res) => {
    totalViews++;
    let html = fs.readFileSync(__dirname + '/index.html', 'utf8'); //reads the HTML file (index.html) from the same directory as the JS file
    html = html.replace("{{views}}", totalViews); //replaces the "views" placeholder with the dynamic totalViews value
    res.send(html); //sends the modified HTML back to the user's browser
});



app.listen(port, () => {
    console.log(`server up and running at <http://localhost>:${port}`);
});


