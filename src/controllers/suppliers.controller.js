import { getConnection, sql } from "../database/connection.js";
import querys from "../database/querys.js";

//Consulta la tabla de Proveedores
export const getSuppliers = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(querys.getAllSuppliers)
        res.json(result.recordsets)
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Crea nuevo proveedor
export const createNewSupplier = async (req, res) => {

    const { supplier, address, city, phone} = req.body

    if (supplier == null || address == null || city == null || phone == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("supplier", sql.VarChar, supplier)
            .input("address", sql.VarChar, address)
            .input("city", sql.VarChar, city)
            .input("phone", sql.VarChar, phone)
            .query(querys.addNewSupplier);
        res.json({ supplier, address, city, phone });
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta un proveedor por Id
export const getSupplierById = async (req, res) => {
    const { id } = req.params;

    if (id == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("id", id)
            .query(querys.getSupplierById);

        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Elimina un proveedor por Id
export const deleteSupplierById = async (req, res) => {
    const { id } = req.params;


    if (id == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("id", id)
            .query(querys.deleteSupplierById);

        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}



//Actualiza un cliente
export const updateSupplierById = async (req, res) => {

    const { supplier, address, city, phone } = req.body;
    const { id } = req.params;

    if ( supplier == null || address == null || city == null || phone == null ) {

        return res.status(400).json({ msg: "Complete todos los campos." })
        
    }
            const pool = await getConnection();
            await pool
            .request()
            .input("supplier", sql.VarChar, supplier)
            .input("address", sql.VarChar, address)
            .input("city", sql.VarChar, city)
            .input("phone", sql.VarChar, phone)
            .input("id", sql.Int, id)
            .query(querys.updateSupplierById);
        res.json({ id, supplier, address, city, phone });
    try {


    } catch (error) {
        
        res.status(500);
        res.status(error.message);
    };
}