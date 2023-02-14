"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  getAllProducts: 'SELECT * FROM Stock',
  addNewProduct: 'INSERT INTO Stock (CodigoArticulo, Marca, Descripcion, Precio, Stock, Unidad) VALUES (@CodigoArticulo, @Marca, @Descripcion, @Precio, @Stock, @Unidad)',
  getProductByCode: 'SELECT * FROM Stock WHERE CodigoArticulo = @code',
  deleteProductByCode: 'DELETE FROM Stock WHERE CodigoArticulo = @code',
  getTotalProduct: 'SELECT COUNT (*) FROM Stock',
  updateProductsByCode: 'UPDATE Stock SET Marca = @Marca, Descripcion = @Descripcion, Precio = @Precio, Stock = @Stock, Unidad = @Unidad WHERE CodigoArticulo = @code'
};
exports["default"] = _default;