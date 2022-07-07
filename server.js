var express = require("express");
const fs = require('fs');
var path = require("path");
var app = express();
app.use(express.json());
app.use(express.static("public"));

const PORT = 3001;


app.use('/', (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html");
});

app.listen(PORT, () =>
    console.log(`App listening on port ${PORT}`)
);