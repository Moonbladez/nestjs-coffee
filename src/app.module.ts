import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeModule } from './coffee/coffee.module';

@Module({
  imports: [CoffeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
