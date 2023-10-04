import { InputType } from '@nestjs/graphql';

@InputType()
export class FirstInput {
  id!: string;
  title!: string;
}
