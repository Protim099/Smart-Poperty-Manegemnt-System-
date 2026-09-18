-- This project uses MongoDB. This SQL file is a relational reference for ERD/documentation only.
CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(120), email VARCHAR(180) UNIQUE, role ENUM('tenant','owner','admin'));
CREATE TABLE properties (id INT PRIMARY KEY, owner_id INT, title VARCHAR(200), location VARCHAR(200), rent DECIMAL(12,2), bedrooms INT, bathrooms INT, status VARCHAR(30));
CREATE TABLE bookings (id INT PRIMARY KEY, property_id INT, tenant_id INT, owner_id INT, move_in_date DATE, duration_months INT, total_amount DECIMAL(12,2), status VARCHAR(30));
CREATE TABLE payments (id INT PRIMARY KEY, booking_id INT, tenant_id INT, amount DECIMAL(12,2), method VARCHAR(30), transaction_id VARCHAR(100), status VARCHAR(30));
CREATE TABLE reviews (id INT PRIMARY KEY, property_id INT, tenant_id INT, rating INT, comment TEXT);
