import { getConnection, sql } from "../database/connection.js";
import querys from "../database/querys.js";

//Consulta la tabla de Ventas
export const getSales = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getSales)
        res.json(result.recordsets)
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}



//Inserta un producto a la venta
export const insertAProductToSale = async (req, res) => {

    const { code, price, quantity } = req.body

    if (code == null || price == null || quantity == null ) {

        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("code", sql.Int, code)
            .input("price", sql.Int, price)
            .input("quantity", sql.Int, quantity)
            .query(querys.insertAProductToSale);
        res.json({ code, price, quantity});

    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta los productos de una venta
export const getProductsByIdSaleOfTheSale = async (req, res) => {
    const { id_sale } = req.params;

    if (id_sale == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id_sale", id_sale)
            .query(querys.getProductsByIdSaleOfTheSale);

        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta un producto por el codigo
export const getProductByCodeOfTheSale = async (req, res) => {
    const { id_sale, code } = req.params;

    if (id_sale == null || code == null ) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id_sale", id_sale)
            .input("code", code)
            .query(querys.getProductsByIdSaleOfTheSale);

        res.send(result.recordsets[0][0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Elimina un producto de la venta por el codigo
export const deleteProductByCodeOfTheSale = async (req, res) => {
    const {id_sale, code } = req.params;

    if ( id_sale == null || code == null ) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }

    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id_sale", id_sale)
            .input("code", code)
            .query(querys.deleteProductByCodeOfTheSale);

        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}


//Elimina todos los productos de la venta
export const deleteAllProductOfTheSale = async (req, res) => {
    const {id_sale } = req.params;

    if ( id_sale == null ) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id_sale", id_sale)
            .query(querys.deleteAllProductOfTheSale);

        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Contar cantidad de productos en venta
export const countTotalItemsOfTheSale = async (req, res) => {
    const { id_sale } = req.params;
    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("id_sale", id_sale)
        .query(querys.countTotalItemsOfTheSale);
    res.json(result.recordsets);

    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Actualiza un producto en la lista de venta
export const updateProductsByCode = async (req, res) => {

    const { price, quantity  } = req.body;
    const { code } = req.params;

    if ( price == null || quantity == null ) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
       
    try {
 const pool = await getConnection();
        await pool
            .request()
            .input("price", sql.Int, price)
            .input("quantity", sql.Int, quantity)
            .input("code", sql.Int, code)
            .query(querys.updateProductsByCode);
        res.json({ brand, description, price, quantity, unit });
    } catch (error) {

        res.status(500);
        res.status(error.message);
    };
}