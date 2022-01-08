import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesonusersService } from './favoritesonusers.service';

describe('FavoritesonusersService', () => {
  let service: FavoritesonusersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritesonusersService],
    }).compile();

    service = module.get<FavoritesonusersService>(FavoritesonusersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
