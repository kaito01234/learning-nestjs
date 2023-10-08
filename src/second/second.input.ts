import { Field, InputType } from '@nestjs/graphql';
import { First } from '@prisma/client';

@InputType()
export class SecondInput {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  first: First;
}
