export default{

    //Productos
    getAllProducts : 'SELECT * FROM products',
    addNewProduct : 'INSERT INTO products (code, brand, description, price, quantity, unit) VALUES (@code, @brand, @description, @price, @quantity, @unit)',
    getProductByCode : 'SELECT * FROM products WHERE code = @code',
    deleteProductByCode : 'DELETE FROM products WHERE code = @code',
    getTotalProducts : 'SELECT COUNT (*) FROM products',
    updateProductsByCode : 'UPDATE products SET brand = @brand, description = @description, price = @price, quantity = @quantity, unit = @unit WHERE code = @code',
    updateQuantityProductsByCode : 'UPDATE products SET quantity = @quantity WHERE code = @code',

    //Clientes
    getAllCustomers : 'SELECT * FROM customers',
    addNewCustomer : 'INSERT INTO customers (dni, name, surname) VALUES (@dni, @name, @surname)',
    getCustomerByDni : 'SELECT * FROM customers WHERE dni = @dni',
    deleteCustomerByDni : 'DELETE FROM customers WHERE dni = @dni',
    updateCustomerByDni : 'UPDATE customers SET name = @name, surname = @surname WHERE dni = @dni',

    //Proveedores
    getAllSuppliers : 'SELECT * FROM suppliers',
    addNewSupplier : 'INSERT INTO suppliers (supplier, address, city, phone) VALUES (@supplier, @address, @city, @phone)',
    getSupplierById : 'SELECT * FROM suppliers WHERE id = @id',
    deleteSupplierById : 'DELETE FROM suppliers WHERE id = @id',
    updateSupplierById : 'UPDATE suppliers SET supplier = @supplier, address = @address, city = @city, phone = @phone WHERE id = @id',
    
    //Venta
    getSales : 'SELECT * FROM sales',
    getProductsByIdSaleOfTheSale : 'SELECT * FROM sales WHERE id_sale = @id_sale',
    getProductByCodeOfTheSale : 'SELECT * FROM sales WHERE id_sale = @id_sale and code = @code',
    countTotalItemsOfTheSale : 'SELECT COUNT (*) FROM sales WHERE id_sale = @id_sale',
    insertAProductToSale : 'DECLARE @id_sale INT; SET @id_sale = (SELECT TOP 1 id_sale FROM id_sales ORDER BY id_sale DESC); INSERT INTO sales (id_sale, code, price, quantity) VALUES (@id_sale, @code, @price, @quantity)',
    deleteProductByCodeOfTheSale : 'DELETE FROM sales WHERE code = @code and id_sale = @id_sale',
    deleteAllProductOfTheSale : 'DELETE FROM sales WHERE id_sale = @id_sale',
    updateProductsByCodeOfTheSale : 'UPDATE sales SET  price = @price, quantity = @quantity WHERE id_sale = @id_sale',

    //ID Ventas
    getIdSales : 'SELECT * FROM id_sales',
    getIdSalesById : 'SELECT * FROM id_sales WHERE id_sale = @id_sale',
    addNewSale :'INSERT INTO id_sales ( dni_customer) VALUES ( @dni_customer);',
    deleteIdSaleById : 'DELETE FROM id_sales WHERE id_sale = @id_sale',
    updateIdSalebyId : 'UPDATE id_sales SET data_time = CURRENT_TIMESTAMP, dni_customer = @dni_customer WHERE id_sale = @id_sale',
    getIdLastSale : 'DECLARE @id_sale INT; SET @id_sale = (SELECT TOP 1 id_sale FROM id_sales ORDER BY id_sale DESC); SELECT @id_sale'

}