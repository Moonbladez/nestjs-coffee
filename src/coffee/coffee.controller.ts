import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto, UpdateCoffeeDto } from './dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { Public } from 'src/common/decorators/public.decorator';

@ApiTags('coffee')
@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a coffee' })
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Public()
  @Get()
  @ApiOperation({ summary: 'Fetch all coffees' })
  async findAll(@Query() paginationQuery: PaginationQueryDto) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return this.coffeeService.findAll(paginationQuery);
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Fetch one coffee' })
  findOne(@Param('id') id: number) {
    return this.coffeeService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update one coffee' })
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(+id, updateCoffeeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete one coffee' })
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(+id);
  }
}
