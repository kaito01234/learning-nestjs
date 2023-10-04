import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class First {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;
}
