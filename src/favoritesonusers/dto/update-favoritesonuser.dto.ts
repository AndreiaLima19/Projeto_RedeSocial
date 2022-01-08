import { PartialType } from '@nestjs/mapped-types';
import { CreateFavoritesonuserDto } from './create-favoritesonuser.dto';

export class UpdateFavoritesonuserDto extends PartialType(CreateFavoritesonuserDto) {}
