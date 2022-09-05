import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Like, Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    // return createMovieDto;
    const record = this.moviesRepository.create(createMovieDto);
    return this.moviesRepository.save(record);
  }

  async findAll(query: { query?: string }) {
    return await this.moviesRepository.find({
      where: {
        name: Like(`%${query.query}%`),
      },
    });
  }

  async findOne(id: number) {
    return await this.moviesRepository.findOneBy({ id: +id });
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    return await this.moviesRepository.update(+id, updateMovieDto);
  }

  async remove(id: number) {
    return await this.moviesRepository.delete(+id);
  }
}
