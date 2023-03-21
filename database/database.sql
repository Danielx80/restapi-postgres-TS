CREATE DATABASE firstapits;
CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40),
	email TEXT
);

INSERT INTO users (name, email)
VALUES 
('Daniel','daniel@gmail.com'),
('Test','Test@gmail.com');
