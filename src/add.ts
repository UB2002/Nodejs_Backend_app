//import fs from 'fs';
import fs = require('fs');
import csv = require('csv-parser');
//import path from 'path';
import path = require('path');
//import csv from 'csv-parser';
import { AppDataSource } from './data-source';
import { Country } from './entity/Country';  // Ensure correct path to Country entity

// Initialize the data source

async function importCSV() {
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');

    const countryRepository = AppDataSource.getRepository(Country);

    fs.createReadStream(path.resolve(__dirname, 'data/country.csv'))  // Path to your CSV file
      .pipe(csv())
      .on('data', async (row) => {
        // Map CSV data to your entity
        const country = countryRepository.create({
          name: row.name,
          country_code_two: row.country_code_two,
          country_code_three: row.country_code_three,
          mobile_code: parseInt(row.mobile_code, 10),
          continent_id: parseInt(row.continent_id, 10),
        });

        await countryRepository.save(country);
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
      });
  } catch (error) {
    console.error('Error during data import:', error);
  }
}

importCSV();
