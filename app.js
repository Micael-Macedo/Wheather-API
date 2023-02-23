const express = require("express")
const bp = require("body-parser")
const rotaWeather = require("./routes/weatherAPI")
const app = express();
app.use(bp.json());
app.use(express.urlencoded ({ extended: false }));

fileLocale = __dirname + "/pages/views/"
app.use(express.static(__dirname + "/public"))
app.get('/', (req,res) =>{
    res.status(200).sendFile(fileLocale + "index.html");
})
app.use('/cidade', rotaWeather);

module.exports = app;