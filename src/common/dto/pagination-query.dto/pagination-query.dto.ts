import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @ApiPropertyOptional({
    default: 10,
    example: 10,
    description: 'Limit of items per page',
  })
  @IsOptional()
  @IsPositive()
  limit: number;

  @ApiPropertyOptional({
    description: 'Offset of items',
  })
  @IsOptional()
  @IsPositive()
  offset: number;
}
