
import {Router} from 'express'
import { getIdSales, addNewSale, deleteIdSaleById, getIdLastSale, getIdSalesById, updateIdSalebyId
} from '../controllers/id_sales.controller.js'

        const router = Router()
        //Consulta ventas
        router.get('/id_sales', getIdSales)
        //Consulta ID de ultima venta
        router.get('/id_sales/id', getIdLastSale)
        //Consulta una venta
        router.get('/id_sales/:id_sale', getIdSalesById)
        //Insertar un producto a la venta
        router.post('/id_sales', addNewSale)
        //Borrar productos de la venta
        router.delete('/id_sales/:id_sale', deleteIdSaleById)
        //Actualizar productos
        router.put('/id_sales/:id_sale', updateIdSalebyId)

        export default router
        
        