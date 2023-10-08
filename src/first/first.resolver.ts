import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { FirstInput } from './first.input';
import { First } from './models/first.model';

@Resolver(() => First)
export class FirstResolver {
  constructor(private prismaService: PrismaService) {}

  @Query(() => [First], { nullable: true })
  async getFirst(@Args('id') id: string) {
    return await this.prismaService.first.findUnique({
      where: { id },
    });
  }

  @Mutation(() => First, { nullable: true })
  async createFirst(@Args('firstInput') firstInput: FirstInput) {
    return await this.prismaService.first.create({
      data: firstInput,
    });
  }
}
