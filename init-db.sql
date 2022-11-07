-- Create admin user
CREATE ROLE apartments_admin WITH LOGIN PASSWORD 'apartments_admin';
CREATE DATABASE apartments_db OWNER apartments_admin;
GRANT ALL PRIVILEGES ON DATABASE apartments_db TO apartments_admin;

\c apartments_db;

-- Create and describe tables
CREATE TABLE IF NOT EXISTS apartments (
    apartment_id serial       PRIMARY KEY,
    title        VARCHAR(255) NOT NULL,
    address      VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS apartment_images (
    apartment_id INT          NOT NULL,
    url          VARCHAR(255) NOT NULL,

    FOREIGN KEY (apartment_id)
        REFERENCES apartments (apartment_id)
);

-- Grant created user privileges on created tables
GRANT ALL PRIVILEGES ON TABLE apartments TO apartments_admin;
GRANT ALL PRIVILEGES ON SEQUENCE apartments_apartment_id_seq TO apartments_admin;
GRANT ALL PRIVILEGES ON TABLE apartment_images TO apartments_admin;