import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesonusersController } from './favoritesonusers.controller';
import { FavoritesonusersService } from './favoritesonusers.service';

describe('FavoritesonusersController', () => {
  let controller: FavoritesonusersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritesonusersController],
      providers: [FavoritesonusersService],
    }).compile();

    controller = module.get<FavoritesonusersController>(FavoritesonusersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
