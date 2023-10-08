import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SecondResolver } from './second.resolver';

@Module({
  providers: [PrismaService, SecondResolver],
})
export class SecondModule {}
