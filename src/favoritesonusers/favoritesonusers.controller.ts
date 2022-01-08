import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FavoritesonusersService } from './favoritesonusers.service';
import { CreateFavoritesonuserDto } from './dto/create-favoritesonuser.dto';
import { UpdateFavoritesonuserDto } from './dto/update-favoritesonuser.dto';

@Controller('favoritesonusers')
export class FavoritesonusersController {
  constructor(private readonly favoritesonusersService: FavoritesonusersService) {}

  @Post()
  create(@Body() createFavoritesonuserDto: CreateFavoritesonuserDto) {
    return this.favoritesonusersService.create(createFavoritesonuserDto);
  }

  @Get()
  findAll() {
    return this.favoritesonusersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoritesonusersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFavoritesonuserDto: UpdateFavoritesonuserDto) {
    return this.favoritesonusersService.update(+id, updateFavoritesonuserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoritesonusersService.remove(+id);
  }
}
