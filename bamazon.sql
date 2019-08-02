CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100) NOT NULL,
    department_name VARCHAR (100) NOT NULL,
    price DECIMAL (10,2) NOT NULL,
    stock_quantity INT(100) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES

('Dewalt circular saw', 'tool', 124.99, 50),
('Ipad mini 5', 'eletronics', 349.99, 49),
('Whey protein powder','health & household', 50.99, 39),
('Galaxy fit bit','electronics', 99.99, 100),
('Electric scooter','outdoor recreation', 299.99, 20),
('Height Adjustable Desk','office product', 399.99, 10),
('Skill table saw', 'tool', 199.99, 29),
('mountain bike','outdoor recreation', 379.99, 15),
('offic chair', 'offic product', 99.99, 30),
('cleaver knife', 'kitchen', 49.99, 50),
('bambo cutting board', 'kitchen', 19.99, 50),
('banana muscle milk', 'health & household', 43.99, 50)

