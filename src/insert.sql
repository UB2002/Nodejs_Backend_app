-- Insert into Country
INSERT INTO Country (id, name, country_code_two, country_code_three, mobile_code, continent_id) VALUES
(76, 'India', 'IN', 'IND', 91, 1);

-- Insert into City
INSERT INTO City (id, name, country_id, is_active, lat, long) VALUES
(436, 'Agra', 76, TRUE, 27.18, 78.02);

-- Insert into Airport
INSERT INTO Airport (id, icao_code, iata_code, name, type, latitude_deg, longitude_deg, elevation_ft, city_id) VALUES
(145, 'VIAG', 'AGR', 'Agra Airport / Agra Air Force Station', 'medium_airport', 27.157683, 77.960942, 551, 436);
