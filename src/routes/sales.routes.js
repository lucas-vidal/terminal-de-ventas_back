
import {Router} from 'express'
import { insertAProductToSale, getSales, getProductsByIdSaleOfTheSale , getProductByCodeOfTheSale, deleteProductByCodeOfTheSale, deleteAllProductOfTheSale, countTotalItemsOfTheSale, updateProductsByCode
        } from '../controllers/sales.controller.js'

const router = Router()
//Consulta ventas
router.get('/sales', getSales)
//Consulta una venta por ID
router.get('/sales/:id_sale', getProductsByIdSaleOfTheSale)
//Consulta una venta por ID
router.get('/sales/:id_sale/:code', getProductByCodeOfTheSale)
//Contar total de productos
router.post('/sales/count/:id_sale', countTotalItemsOfTheSale)
//Insertar un producto a la venta
router.post('/sales', insertAProductToSale)
//Borrar producto de una venta
router.delete('/sales/:id_sale/:code', deleteProductByCodeOfTheSale)
//Borrar todos los productos de una venta
router.delete('/sales/:id_sale', deleteAllProductOfTheSale)
//Actualizar productos
router.put('/sales/:id_sale/:code', updateProductsByCode)

export default router