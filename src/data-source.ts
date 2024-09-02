import "reflect-metadata";
import { DataSource } from "typeorm";
import { Airport } from "./entity/Airport"; // Import the Airport entity
import { City } from "./entity/City";       // Import other entities as needed
import { Country } from "./entity/Country"; // Import the Country entity

export const AppDataSource = new DataSource({
    type: "postgres",
    url: "postgresql://admin:kGaAYE6Tk6krNK70DNU9Ioovggscn1bE@dpg-cra78tbv2p9s73bnghag-a/airport_db_g29h",
    //url: "postgresql://admin:kGaAYE6Tk6krNK70DNU9Ioovggscn1bE@dpg-cra78tbv2p9s73bnghag-a.oregon-postgres.render.com/airport_db_g29h",
    synchronize: false, // Set to false in production to avoid accidental data loss
    logging: false,
    entities: [Airport, City, Country],
    migrations: [],
    subscribers: [],
    //extra: {
    //    connectionTimeoutMillis: 30000, // 30 seconds
    //},
    ssl: {
        rejectUnauthorized: false, // Disable certificate validation if needed
    },
});


/*
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Airport } from "./entity/Airport"; // Import the Airport entity
import { City } from "./entity/City";       // Import other entities as needed
import { Country } from "./entity/Country"; // Import the Country entity

export const AppDataSource = new DataSource({
    type: "postgres",
    url: "postgresql://admin:rzQexZFPmCWwVR3peyojmVdQq6oiYYxL@dpg-cr99qrrv2p9s73b47am0-a.oregon-postgres.render.com/airport_db_nq23",
    synchronize: true,
    logging: false,
    entities: [Airport, City, Country],
    migrations: [],
    subscribers: [],
    extra: {
        connectionTimeoutMillis: 30000, // 30 seconds
    },
    ssl: {
        rejectUnauthorized: false, // Disable certificate validation if needed
    },
});
*/