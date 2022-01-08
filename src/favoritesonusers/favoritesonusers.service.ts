import { Injectable } from '@nestjs/common';
import { CreateFavoritesonuserDto } from './dto/create-favoritesonuser.dto';
import { UpdateFavoritesonuserDto } from './dto/update-favoritesonuser.dto';

@Injectable()
export class FavoritesonusersService {
  create(createFavoritesonuserDto: CreateFavoritesonuserDto) {
    return 'This action adds a new favoritesonuser';
  }

  findAll() {
    return `This action returns all favoritesonusers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} favoritesonuser`;
  }

  update(id: number, updateFavoritesonuserDto: UpdateFavoritesonuserDto) {
    return `This action updates a #${id} favoritesonuser`;
  }

  remove(id: number) {
    return `This action removes a #${id} favoritesonuser`;
  }
}
