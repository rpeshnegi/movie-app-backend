import { IsNotEmpty } from 'class-validator';

export class CreateMovieDto {
  id: number;

  @IsNotEmpty()
  name: string;

  description: string;

  isActive: boolean;
}
