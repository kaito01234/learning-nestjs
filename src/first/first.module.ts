import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FirstResolver } from './first.resolver';

@Module({
  providers: [PrismaService, FirstResolver],
})
export class FirstModule {}
