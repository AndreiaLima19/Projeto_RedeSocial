import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { FollowerModule } from './follower/follower.module';
import { FollowingModule } from './following/following.module';
import { TweetModule } from './tweet/tweet.module';
import { UserModule } from './user/user.module';
import { CategoriesontweetsModule } from './categoriesontweets/categoriesontweets.module';
import { FavoritesonusersModule } from './favoritesonusers/favoritesonusers.module';

@Module({
  imports: [
    PrismaModule,
    CategoryModule,
    FollowerModule,
    FollowingModule,
    TweetModule,
    UserModule,
    CategoriesontweetsModule,
    FavoritesonusersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
