
import {Router} from 'express'
import { createNewProducts, getProducts, getProductByCode, deleteProductByCode, getTotalProducts, updateProductsByCode, updateQuantityProductsByCode
        } from '../controllers/products.controller.js'

const router = Router()
//Consulta productos
router.get('/products', getProducts)
//Consulta una linea de productos
router.get('/products/:code', getProductByCode)
//Contar total de productos
router.post('/products/count', getTotalProducts)
//Insertar un producto
router.post('/products', createNewProducts)
//Borrar productos
router.delete('/products/:code', deleteProductByCode)
//Actualizar productos
router.put('/products/:code', updateProductsByCode)
//Actualizar productos
router.put('/products/quantity/:code', updateQuantityProductsByCode)

export default router

