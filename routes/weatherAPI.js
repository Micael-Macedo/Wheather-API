const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

let apiKey = "19961e8a3712411e90105838232302";

router.get("/:cidade", async(req, res, next) =>{
    let dados = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${req.params.cidade}&aqi=no`)
    .then(response => response.json())
    .then(data => { return data})
    .catch(erro => { return erro})
    res.status(200).json(dados);
})

module.exports = router


