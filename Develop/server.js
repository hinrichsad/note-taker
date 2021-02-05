const express = require('express');
const dbJson = require('./db/db.json')

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static('./'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./apiRouter")(app);
require("./htmlRouter")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});