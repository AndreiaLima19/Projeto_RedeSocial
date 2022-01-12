import { IsInt, IsString } from 'class-validator';

export class CreateFollowingDto {
  @IsString()
  name: string;

  @IsInt()
  userid: number;
}
