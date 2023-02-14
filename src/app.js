import express from 'express'
import config from './config.js';
import cors from 'cors'

import productsRoutes from './routes/products.routes.js';
import customersRoutes from './routes/customers.routes.js';
import suppliersRoutes from './routes/suppliers.routes.js';
import salesRoutes from './routes/sales.routes.js';
import id_salesRoutes from './routes/id_sales.routes.js';

const app = express()

app.use(cors())
//settings
app.set('port', config.port)
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(productsRoutes);
app.use(customersRoutes);
app.use(suppliersRoutes);
app.use(salesRoutes);
app.use(id_salesRoutes);

export default app