import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { First } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { Second } from './models/second.model';

@Resolver(() => Second)
export class SecondResolver {
  constructor(private prismaService: PrismaService) {}

  @ResolveField(() => [Second])
  async seconds(@Parent() first: First) {
    const select = await this.prismaService.first.findUnique({
      where: { id: first.id },
    });
    return await this.prismaService.second.findMany({
      where: { id: select.id },
    });
  }

  // @Mutation(() => Second, { nullable: true })
  // async createFirst(@Args('secondInput') secondInput: SecondInput) {
  //   return await this.prismaService.second.create({
  //     data: secondInput,
  //   });
  // }

  // @Query(() => [Second], { name: 'second', nullable: true })
  // async getPosts() {
  //   return [
  //     {
  //       id: '1',
  //       title: 'NestJS is so good.',
  //     },
  //     {
  //       id: '2',
  //       title: 'GraphQL is so good.',
  //     },
  //   ];
  // }
}
