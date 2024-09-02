import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Country } from './Country';
import { Airport } from './Airport';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ name: 'country_id' })  // Explicitly specify the column name
  country_id: number;

  @ManyToOne(() => Country, (country) => country.cities)
  @JoinColumn({ name: 'country_id' })  // Explicitly specify the join column name
  country: Country;

  @Column()
  is_active: boolean;

  @Column('float')
  lat: number;

  @Column('float')
  long: number;

  @OneToMany(() => Airport, (airport) => airport.city)
  airports: Airport[];
}
