import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { Post } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
}
