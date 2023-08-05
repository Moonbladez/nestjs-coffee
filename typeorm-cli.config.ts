import { CoffeeRefactor1691263388277 } from 'src/migrations/1691263388277-CoffeeRefactor';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: '192.168.7.66',
  port: 49157,
  username: 'bekki',
  password: 'nestjs!bekki83',
  database: 'postgres',
  entities: [],
  migrations: [CoffeeRefactor1691263388277],
});
