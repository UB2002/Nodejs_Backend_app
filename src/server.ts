//import express from 'express';
import * as express from 'express';
import 'reflect-metadata';
//import express from 'express';
import { AppDataSource } from './data-source';
import { Airport } from './entity/Airport';

const app = express();

AppDataSource.initialize().then(async () => {
  console.log('Data Source has been initialized!');

  app.get('/airport', async (req, res) => {
    const iata_code = req.query.iata_code as string;

    const airport = await AppDataSource.getRepository(Airport).findOne({
      where: { iata_code },
      relations: ['city', 'city.country'],
    });

    if (!airport) {
      return res.status(404).json({ error: 'Airport not found' });
    }

    res.json({
      airport: {
        id: airport.id,
        icao_code: airport.icao_code,
        iata_code: airport.iata_code,
        name: airport.name,
        type: airport.type,
        latitude_deg: airport.latitude_deg,
        longitude_deg: airport.longitude_deg,
        elevation_ft: airport.elevation_ft,
        address: {
          city: airport.city,
          country: airport.city?.country || null,
        },
      },
    });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((error) => console.log(error));
