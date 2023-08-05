import { IsString } from 'class-validator';
import { Flavour } from '../entities/flavour.entity';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavours: Flavour[];
}
