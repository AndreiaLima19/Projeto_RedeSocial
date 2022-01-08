import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriesontweetDto } from './create-categoriesontweet.dto';

export class UpdateCategoriesontweetDto extends PartialType(CreateCategoriesontweetDto) {}
