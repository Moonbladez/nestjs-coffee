import { Injectable } from '@nestjs/common';
import { CoffeeService } from 'src/coffee/coffee.service';

@Injectable()
export class CoffeeRatingService {
  constructor(private readonly coffeeService: CoffeeService) {}
}
