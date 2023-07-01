import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async updateUser(user: any, payload: UserDto) {
    try {
      const update = await this.prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          email: user.email || payload.email,
          hash: user.hash || payload.hash,
          firstname: user.firstname || payload.firstname,
          lastname: user.lastname || payload.lastname,
        },
      });
      delete update.hash;
      return update;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteUser(id: any) {
    try {
      const deleteUser = await this.prisma.user.delete({
        where: { id: Number(id.id) },
      });
      delete deleteUser.hash;
      return deleteUser;
    } catch (error) {
      if (error.code === 'P2025') throw new NotFoundException('User not found');
    }
  }
}
