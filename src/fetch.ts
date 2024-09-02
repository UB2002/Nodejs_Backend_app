import 'reflect-metadata';
import { AppDataSource } from './data-source';
import { Airport } from './entity/Airport';

async function fetchAirports() {
  try {
    // Initialize the Data Source
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');

    // Get the repository for the Airport entity
    const airportRepository = AppDataSource.getRepository(Airport);

    // Fetch all records from the airport table
    const airports = await airportRepository.find();

    if (airports.length === 0) {
      console.log('No airports found. Please verify the table has data.');
      return;
    }

    // Log the details of all airports
    console.log({
      airports: airports.map(airport => ({
        id: airport.id,
        icao_code: airport.icao_code,
        iata_code: airport.iata_code,
        name: airport.name,
        type: airport.type,
        latitude_deg: airport.latitude_deg,
        longitude_deg: airport.longitude_deg,
        elevation_ft: airport.elevation_ft,
      })),
    });
  } catch (error) {
    console.error('Error fetching airports:', error);
  }
}

// Call the function to fetch and display airport data
fetchAirports();
