import { Module } from '@nestjs/common';

import { CoffeeModule } from './coffee/coffee.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CoffeeModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.7.66',
      password: 'nestjs!bekki83',
      port: 49157,
      username: 'bekki',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
