
CREATE TABLE products (
code INT NOT NULL PRIMARY KEY,
brand VARCHAR(100),
description TEXT NOT NULL,
price INT NOT NULL,
quantity INT NOT NULL,
unit VARCHAR(100) NOT NULL,
);

CREATE TABLE customers (
dni INT NOT NULL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
surname VARCHAR(100) NOT NULL,
);

CREATE TABLE suppliers (
id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
supplier VARCHAR(100) NOT NULL,
address VARCHAR(100),
city VARCHAR(100),
phone VARCHAR(100) NOT NULL,
);

CREATE TABLE users (
name VARCHAR(100) NOT NULL PRIMARY KEY,
password VARCHAR(100) NOT NULL,
level VARCHAR(100) NOT NULL,
);

CREATE TABLE id_sales (
id_sale INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
data_time DATETIME,
dni_customer INT,
);

CREATE TABLE sales (
id_sale INT NOT NULL CONSTRAINT FK_sales_id_sales FOREIGN KEY REFERENCES id_sales (id_sale),
code INT NOT NULL,
price INT NOT NULL,
quantity INT NOT NULL,
);

CREATE TABLE id_purchases (
id_purchase INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
data_time DATETIME,
id_supplier INT,
);

CREATE TABLE purchases (
id_purchase INT NOT NULL CONSTRAINT FK_purchases_id_purchases FOREIGN KEY REFERENCES id_purchases (id_purchase),
code INT NOT NULL,
price INT NOT NULL,
quantity INT NOT NULL,

)



