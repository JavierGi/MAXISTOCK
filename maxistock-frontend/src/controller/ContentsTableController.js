import { GetEverything, GetMostBuyed, GetProductByCode } from "../service/ContentsTableOrquestrator";

var express = require('express')
var app = express()

app.get('/get-everything', function (req, res) {
  res.send(GetEverything())
})

app.get('/get-most-buyed', function (req, res) {
  res.send(GetMostBuyed())
})

app.get('/get-product/:code', function (req, res) {
  res.send(GetProductByCode(req.params.code))
})