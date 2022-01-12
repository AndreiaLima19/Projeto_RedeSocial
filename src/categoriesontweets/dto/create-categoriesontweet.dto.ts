import { IsInt, IsString } from 'class-validator';

export class CreateCategoriesontweetDto {
  @IsInt()
  tweetid: number;

  @IsInt()
  categoryid: number;

  @IsString()
  assignedBy: string;
}
