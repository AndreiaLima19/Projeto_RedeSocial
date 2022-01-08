import { Module } from '@nestjs/common';
import { CategoriesontweetsService } from './categoriesontweets.service';
import { CategoriesontweetsController } from './categoriesontweets.controller';

@Module({
  controllers: [CategoriesontweetsController],
  providers: [CategoriesontweetsService]
})
export class CategoriesontweetsModule {}
