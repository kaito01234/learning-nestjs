import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { FirstInput } from './first.input';
import { First } from './models/first.model';
import { Logger } from '@nestjs/common';

@Resolver(() => First)
export class FirstResolver {
  constructor(private prismaService: PrismaService) {}

  private readonly logger = new Logger(FirstResolver.name);

  @Query(() => First, { nullable: true })
  async getFirst(@Args('id') id: string) {
    this.logger.log(`id: ${id}`);
    const a = await this.prismaService.first.findUnique({
      where: { id },
    });
    return a;
  }

  @Mutation(() => First, { nullable: true })
  async createFirst(@Args('firstInput') firstInput: FirstInput) {
    return await this.prismaService.first.create({
      data: firstInput,
    });
  }
}
