import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { First } from './models/first.model';
import { FirstInput } from './inputs/first';

@Resolver(() => First)
export class FirstResolver {
  constructor(private prismaService: PrismaService) {}

  @Query(() => [First], { name: 'first', nullable: true })
  async getFirst(@Args('id') id: string) {
    return await this.prismaService.first.findUnique({
      where: { id },
    });
  }

  @Mutation(() => First, { nullable: true })
  async createFirst(
    @Args('firstInput')
    firstInput: FirstInput,
  ) {
    return await this.prismaService.first.create({
      data: firstInput,
    });
  }

  //   @ResolveField()
  //   async items(@Parent() first: First) {
  //     const { id } = payroll;

  //     const targetData = await this.prismaService.payroll.findUnique({
  //       where: { id },
  //       include: {
  //         payment: { include: { paymentRegulation: true } },
  //         payrollItemValues: { include: { payrollItemAttribute: true } },
  //       },
  //     });

  //     const payrollItemValues = targetData?.payrollItemValues ?? [];
  //     const timeUnitType =
  //       targetData?.payment?.paymentRegulation?.timeUnitType ?? 'TIME_DECIMAL';

  //     return this.getItemsByGroup(payrollItemValues, timeUnitType);
  //   }
}
