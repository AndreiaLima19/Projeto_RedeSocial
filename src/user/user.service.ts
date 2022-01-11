/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { JwtPayload } from 'src/auth/jwt.strategy';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'src/auth/dto/login.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    data.password = await bcrypt.hash(data.password, 10);
    return await this.prisma.user.create({ data });
  }

  async findByLogin(login: LoginDto): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        username: login.username,
      },
    });

    if (!user) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }

    const senhaIgual = await bcrypt.compare(login.password, user.password);

    if (!senhaIgual) {
      throw new HttpException('Senha inválida', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async validateUser(payload: JwtPayload): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        username : payload.username,
      }
    });

    if(!user){
      throw new HttpException('Token inválido', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User> {
    return await this.prisma.user.findUnique({ where: {id}});
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.prisma.user.update({
      data: {...updateUserDto},
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({where: { id }});
  }
}
