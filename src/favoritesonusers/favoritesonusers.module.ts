import { Module } from '@nestjs/common';
import { FavoritesonusersService } from './favoritesonusers.service';
import { FavoritesonusersController } from './favoritesonusers.controller';

@Module({
  controllers: [FavoritesonusersController],
  providers: [FavoritesonusersService]
})
export class FavoritesonusersModule {}
