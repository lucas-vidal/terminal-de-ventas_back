
import {Router} from 'express'
import { getSuppliers, getSupplierById, createNewSupplier, deleteSupplierById, updateSupplierById
        } from '../controllers/suppliers.controller.js'

const router = Router()
//Consulta productos
router.get('/suppliers', getSuppliers)
//Consulta una linea de productos
router.get('/suppliers/:id', getSupplierById)
//Insertar un producto
router.post('/suppliers', createNewSupplier)
//Borrar productos
router.delete('/suppliers/:id', deleteSupplierById)
//Actualizar productos
router.put('/suppliers/:id', updateSupplierById)

export default router