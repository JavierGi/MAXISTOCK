import { AddProductService } from "../service/AddProductService";

var express = require('express')
var app = express()

app.post('/add-product', function (req, res) {
  AddProductService(req.body.nombre, req.body.precio, req.body.cantidad)
})