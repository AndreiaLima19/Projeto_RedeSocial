import { IsInt, IsString } from 'class-validator';

export class CreateFavoritesonuserDto {
  @IsInt()
  tweetid: number;

  @IsInt()
  userid: number;

  @IsString()
  assignedBy: string;
}
