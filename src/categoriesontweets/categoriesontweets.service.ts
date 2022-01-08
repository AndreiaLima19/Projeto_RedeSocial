import { Injectable } from '@nestjs/common';
import { CreateCategoriesontweetDto } from './dto/create-categoriesontweet.dto';
import { UpdateCategoriesontweetDto } from './dto/update-categoriesontweet.dto';

@Injectable()
export class CategoriesontweetsService {
  create(createCategoriesontweetDto: CreateCategoriesontweetDto) {
    return 'This action adds a new categoriesontweet';
  }

  findAll() {
    return `This action returns all categoriesontweets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriesontweet`;
  }

  update(id: number, updateCategoriesontweetDto: UpdateCategoriesontweetDto) {
    return `This action updates a #${id} categoriesontweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriesontweet`;
  }
}
