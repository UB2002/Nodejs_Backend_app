CREATE TABLE Country (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  country_code_two CHAR(2),
  country_code_three CHAR(3),
  mobile_code INT,
  continent_id INT
);

CREATE TABLE City (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  country_id INT,
  is_active BOOLEAN,
  lat FLOAT,
  long FLOAT,
  FOREIGN KEY (country_id) REFERENCES Country(id)
);

CREATE TABLE Airport (
  id INT PRIMARY KEY,
  icao_code CHAR(4),
  iata_code CHAR(3),
  name VARCHAR(255),
  type VARCHAR(50),
  latitude_deg FLOAT,
  longitude_deg FLOAT,
  elevation_ft INT,
  city_id INT,
  FOREIGN KEY (city_id) REFERENCES City(id)
);
