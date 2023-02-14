"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("../controllers/products.controller");

var router = (0, _express.Router)(); //Consulta productos

router.get('/products', _products.getProducts); //Consulta una linea de productos

router.get('/products/:code', _products.getProductByCode); //Contar total de productos

router.get('/products/count', _products.getTotalProducts); //Insertar un producto

router.post('/products', _products.createNewProducts); //Borrar productos

router["delete"]('/products/:code', _products.deleteProductByCode); //Actualizar productos

router.put('/products/:code', _products.updateProductsByCode);
var _default = router;
exports["default"] = _default;