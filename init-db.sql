-- Create admin user
DO
$do$
BEGIN
    IF EXISTS (
    SELECT FROM pg_catalog.pg_roles
    WHERE  rolname = 'apartments_admin') THEN
        RAISE NOTICE 'Role "apartments_admin" already exists';
    ELSE
        CREATE ROLE apartments_admin WITH LOGIN PASSWORD 'apartments_admin';
    END IF;
END
$do$;

-- Create database
SELECT 'CREATE DATABASE apartments_db OWNER apartments_admin'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'apartments_db')\gexec

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