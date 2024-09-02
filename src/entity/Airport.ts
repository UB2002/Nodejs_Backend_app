import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { City } from './City';

@Entity()
export class Airport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 4 })
  icao_code: string;

  @Column({ length: 3 })
  iata_code: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 50 })
  type: string;

  @Column('float')
  latitude_deg: number;

  @Column('float')
  longitude_deg: number;

  @Column()
  elevation_ft: number;

  @Column({ name: 'city_id' })  // Explicitly specify the column name
  city_id: number;

  @ManyToOne(() => City, (city) => city.airports)
  @JoinColumn({ name: 'city_id' })  // Explicitly specify the join column name
  city: City;
}
