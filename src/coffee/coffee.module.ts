import { Module } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeeController } from './coffee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavour } from './entities/flavour.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavour])],
  controllers: [CoffeeController],
  providers: [CoffeeService],
})
export class CoffeeModule {}
