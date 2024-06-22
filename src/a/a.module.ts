import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AResolver } from './a.resolver';

@Module({
  providers: [PrismaService, AResolver],
})
export class AModule { }
