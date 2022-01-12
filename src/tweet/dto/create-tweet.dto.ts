import { IsInt, IsString } from 'class-validator';

export class CreateTweetDto {
  @IsString()
  content: string;

  @IsInt()
  userid: number;
}
