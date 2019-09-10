--Establish the database. --
CREATE DATABASE bamazon_DB;

--Select the particular database:
USE bamazon_DB;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Insert data into the 'products' table: --
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (01, "iPhone XR", "electronics", 899.00, 5),
(02, "Zen Garden Kit", "Arts & Crafts", 10.00, 100),
(03, "Brawny Paper Towels", "Grocery", 4.25, 400),
(04, "Solar Lights Outdoor", "Home Improvement", 39.99, 150),
(05, "Echo Dot", "bmazon devices", 49.99, 65),
(06, "Security Camera Indoor", "Electronics", 42.49, 35),
(07, "Huckleberry Finn", "Books", 4.69, 500),
(08, "Of Mice and Men", "Books", 5.96, 300),
(09, "Blender", "Appliance", 49.00, 16),
(10, "Pens", "Office", 4.00, 500);