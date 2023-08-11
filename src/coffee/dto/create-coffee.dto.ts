import { IsString } from 'class-validator';
import { Flavour } from '../entities/flavour.entity';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'The name of a coffee.' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'The brand of a coffee.' })
  @IsString()
  readonly brand: string;

  @ApiProperty({ example: ['chocolate', 'vanilla'] })
  @IsString({ each: true })
  readonly flavours: Flavour[];
}
