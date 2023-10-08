import { Field, ObjectType } from '@nestjs/graphql';
import { First } from 'src/first/models/first.model';

@ObjectType()
export class Second {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => First)
  first: First;
}
