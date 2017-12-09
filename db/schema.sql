CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INT AUTOINCREMENT NOT NULL,
	burger_name VARCHAR(100),
	devoured boolean DEFAULT false,
	date_time TIMESTAMP,
	id PRIMARY KEY
);
