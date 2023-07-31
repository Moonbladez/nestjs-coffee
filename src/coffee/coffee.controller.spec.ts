import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';

describe('CoffeeController', () => {
  let controller: CoffeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeeController],
      providers: [CoffeeService],
    }).compile();

    controller = module.get<CoffeeController>(CoffeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
