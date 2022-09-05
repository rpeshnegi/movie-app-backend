import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movies' })
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: null })
  description: string;

  @Column({ default: true })
  isActive: boolean;

  constructor(partial: Partial<Movie>) {
    Object.assign(this, partial);
  }
}
