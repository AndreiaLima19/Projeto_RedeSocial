import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesontweetsService } from './categoriesontweets.service';

describe('CategoriesontweetsService', () => {
  let service: CategoriesontweetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesontweetsService],
    }).compile();

    service = module.get<CategoriesontweetsService>(CategoriesontweetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
