import { SellProductService } from "../service/SellProductService";

var express = require('express')
var app = express()

app.post('/sell-product', function (req, res) {
  SellProductService(req.body.codigo, req.body.cantidad)
})