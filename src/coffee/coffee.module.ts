import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/event/entities/event.entity';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';
import { Coffee } from './entities/coffee.entity';
import { Flavour } from './entities/flavour.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Event, Flavour])],
  controllers: [CoffeeController],
  providers: [CoffeeService],
  exports: [CoffeeService],
})
export class CoffeeModule {}
