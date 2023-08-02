import { Module } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeeController } from './coffee.controller';

@Module({
  controllers: [CoffeeController],
  providers: [CoffeeService],
})
export class CoffeeModule {}
