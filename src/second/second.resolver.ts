import { Query, Resolver } from '@nestjs/graphql';
import { Second } from './models/second.model';

@Resolver(() => Second)
export class SecondResolver {
  constructor() {}

  @Query(() => [Second], { name: 'second', nullable: true })
  async getPosts() {
    return [
      {
        id: '1',
        title: 'NestJS is so good.',
      },
      {
        id: '2',
        title: 'GraphQL is so good.',
      },
    ];
  }
}
