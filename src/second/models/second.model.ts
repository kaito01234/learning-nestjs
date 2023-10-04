import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Second {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;
}
