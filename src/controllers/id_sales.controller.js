import { getConnection, sql } from "../database/connection.js";
import querys from "../database/querys.js";

//Consulta la tabla de ID Ventas
export const getIdSales = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getIdSales)
        res.json(result.recordsets)
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta una compra por el ID
export const getIdSalesById = async (req, res) => {
    const { id_sale } = req.params;

    if (id_sale == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id_sale", id_sale)
            .query(querys.getIdSalesById);

        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta un producto por el codigo
export const getIdLastSale = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .query(querys.getIdLastSale);
        res.send(result.recordsets);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Crea una nueva venta
export const addNewSale = async (req, res) => {

    const { dni_customer } = req.body

    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("dni_customer", sql.Int, dni_customer)
            .query(querys.addNewSale);
        res.json({ dni_customer});

    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}


//Elimina una venta por ID
export const deleteIdSaleById = async (req, res) => {
    const { id_sale } = req.params;

    if (id_sale == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }

    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id_sale", id_sale)
            .query(querys.deleteIdSaleById);

        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Actualiza un producto en la lista de venta
export const updateIdSalebyId = async (req, res) => {

    const { dni_customer } = req.body;
    const { id_sale } = req.params;

    // if ( dni_customer == null ) {
    //     return res.status(400).json({ msg: "Complete todos los campos." })
    // }
       
    try {
 const pool = await getConnection();
        await pool
            .request()
            .input("dni_customer", sql.Int, dni_customer)
            .input("id_sale", sql.Int, id_sale)
            .query(querys.updateIdSalebyId);
        res.json({ id_sale, dni_customer });
    } catch (error) {

        res.status(500);
        res.status(error.message);
    };
}