
import {Router} from 'express'
import { createNewCustomer, getCustomers, getCustomerByDni, deleteCustomerByDni, updateCustomerByDni
        } from '../controllers/customers.controller.js'

const router = Router()
//Consulta clientes
router.get('/customers', getCustomers)
//Consulta un cliente
router.get('/customers/:dni', getCustomerByDni)
//Insertar un cliente
router.post('/customers', createNewCustomer)
//Borrar un cliente
router.delete('/customers/:dni', deleteCustomerByDni)
//Actualizar datos de cliente
router.put('/customers/:dni', updateCustomerByDni)

export default router