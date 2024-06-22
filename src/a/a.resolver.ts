import { Args, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { Logger } from '@nestjs/common';
import { First } from 'src/first/models/first.model';

@Resolver(() => First)
export class AResolver {
  constructor(private prismaService: PrismaService) { }

  private readonly logger = new Logger(AResolver.name);

  @Query(() => First, { nullable: true })
  async getFirst(@Args('id') id: string) {
    this.logger.log(`id: ${id}`);
    const a = await this.prismaService.first.findUnique({
      where: { id },
    });
    return a;
  }
}
