import { IsInt, IsString } from 'class-validator';

export class CreateFollowerDto {
  @IsString()
  name: string;

  @IsInt()
  userid: number;
}
