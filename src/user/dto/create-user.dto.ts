import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    example: 'João',
    description: `O primeiro nome do usuário.`,
  })
  name: string;

  @IsString()
  @ApiProperty({
    example: 'Silva',
    description: `O último sobrenome do usuário.`,
  })
  lastname: string;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  about: string;

  @IsString()
  birthday: string;
}
