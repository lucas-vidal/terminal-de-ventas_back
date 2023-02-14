import { getConnection, sql } from "../database/connection.js";
import querys from "../database/querys.js";

//Consulta la tabla de Clientes
export const getCustomers = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(querys.getAllCustomers)
        res.json(result.recordsets)
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Crea nuevo cliente
export const createNewCustomer = async (req, res) => {

    const { dni, name, surname} = req.body

    if (dni == null || name == null || surname == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("dni", sql.Int, dni)
            .input("name", sql.VarChar, name)
            .input("surname", sql.VarChar, surname)
            .query(querys.addNewCustomer);
        res.json({ dni, name, surname });
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta un cliente por dni
export const getCustomerByDni = async (req, res) => {
    const { dni } = req.params;

    if (dni == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("dni", dni)
            .query(querys.getCustomerByDni);

        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Elimina un cliente por dni
export const deleteCustomerByDni = async (req, res) => {
    const { dni } = req.params;


    if (dni == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("dni", dni)
            .query(querys.deleteCustomerByDni);

        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}



//Actualiza un cliente
export const updateCustomerByDni = async (req, res) => {

    const { name, surname } = req.body;
    const { dni } = req.params;

    if (name == null || surname == null ) {

        return res.status(400).json({ msg: "Complete todos los campos." })
        
    }
            const pool = await getConnection();

            await pool
            .request()
            .input("name", sql.VarChar, name)
            .input("surname", sql.VarChar, surname)
            .input("dni", sql.Int, dni)
            .query(querys.updateCustomerByDni);
        res.json({ dni, name, surname });
    try {


    } catch (error) {
        
        res.status(500);
        res.status(error.message);
    };
}