import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesontweetsController } from './categoriesontweets.controller';
import { CategoriesontweetsService } from './categoriesontweets.service';

describe('CategoriesontweetsController', () => {
  let controller: CategoriesontweetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesontweetsController],
      providers: [CategoriesontweetsService],
    }).compile();

    controller = module.get<CategoriesontweetsController>(CategoriesontweetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
