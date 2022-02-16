const express = require('express');
const app = express();
const sequelize = require('./database/connection');
const bodyParser = require('body-parser');
const PORT = 3500;
const courseroutes=require("./routes/router");
const path = require('path');

app.set("view engine", "ejs");
require('./database/connection');

// load routers

// parse request to body-parser
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/',courseroutes);
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`post connected:: http://localhost:${PORT}`);
    });
});
