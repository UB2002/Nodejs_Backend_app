DROP TABLE IF EXISTS country;
CREATE TABLE country (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  country_code_two VARCHAR,
  country_code_three VARCHAR,
  mobile_code VARCHAR,
  continent_id INTEGER
);
