import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriesontweetsService } from './categoriesontweets.service';
import { CreateCategoriesontweetDto } from './dto/create-categoriesontweet.dto';
import { UpdateCategoriesontweetDto } from './dto/update-categoriesontweet.dto';

@Controller('categoriesontweets')
export class CategoriesontweetsController {
  constructor(private readonly categoriesontweetsService: CategoriesontweetsService) {}

  @Post()
  create(@Body() createCategoriesontweetDto: CreateCategoriesontweetDto) {
    return this.categoriesontweetsService.create(createCategoriesontweetDto);
  }

  @Get()
  findAll() {
    return this.categoriesontweetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesontweetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriesontweetDto: UpdateCategoriesontweetDto) {
    return this.categoriesontweetsService.update(+id, updateCategoriesontweetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesontweetsService.remove(+id);
  }
}
