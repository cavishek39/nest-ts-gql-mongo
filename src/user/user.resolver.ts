import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { CreateUserInput } from './user.input';
import { User } from './user.schema';
import { UserService } from './user.service';

/**
 * Resolvers provide the instructions for turning
 * a GraphQL operation (a query, mutation, or subscription) into data.
 */
@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  // Doing the createUser mutation by calling the create func of user.service layer
  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return this.userService.create(input);
  }

  // Doing the users query by calling the find func of user.service layer
  @Query(() => [User])
  async users() {
    return this.userService.find();
  }
}
