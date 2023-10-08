import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FirstInput {
  @Field()
  id: string;

  @Field()
  title: string;
}
