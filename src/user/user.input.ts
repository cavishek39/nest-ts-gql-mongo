import { Field, InputType } from '@nestjs/graphql';

/**
 * The input file specifies what TypeScript and GraphQL types
 * the resolver function will receive.
 */

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  age: number;
}
