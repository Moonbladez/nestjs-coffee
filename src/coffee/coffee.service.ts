import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeeService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];
  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  findAll() {
    return this.coffees;
  }

  async findOne(id: number) {
    const coffee = this.coffees.find((item) => item.id === id);

    if (!coffee) {
      return new NotFoundException('Coffee not found');
    }

    return coffee;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const exsitCoffee = this.findOne(id);
    if (exsitCoffee) {
      // update the existing entity
    }
  }

  remove(id: number) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
