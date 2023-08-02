import { Module } from '@nestjs/common';

import { CoffeeModule } from './coffee/coffee.module';

@Module({
  imports: [CoffeeModule],
})
export class AppModule {}
