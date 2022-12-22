import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

// Mongoose schema
export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

/**
 * GraphQL type of User
 */

@ObjectType()
export class User extends Document {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  age: number;
}
