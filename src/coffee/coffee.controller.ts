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
import { PaginationQueryDto } from 'src/common/dto';
import { Protocol, Public } from 'src/common/decorators';

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
  async findAll(
    @Protocol('https') protocol: string,
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    console.log(protocol);
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
  update(@Param('id') id: number, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(+id, updateCoffeeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete one coffee' })
  remove(@Param('id') id: number) {
    return this.coffeeService.remove(id);
  }
}
