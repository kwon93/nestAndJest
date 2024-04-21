import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async findPostById(userIdx: number) {
    return await this.post.findUnique({
      where: {
        id: userIdx,
      },
    });
  }
}
