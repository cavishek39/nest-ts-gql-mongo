import { Inject, Injectable } from '@nestjs/common';
import { CreateQuery, FilterQuery, Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  // Creating a user
  async create(input: CreateQuery<User>): Promise<User> {
    return this.userModel.create(input);
  }

  // Find one
  async findOne(query: FilterQuery<User>): Promise<User> {
    // Used lean() here to return a plain JS object instead of Mongoose Document class
    return this.userModel.findOne(query).lean();
  }

  // Find list(i.e. many) of Users
  async find(): Promise<User[]> {
    return this.userModel.find().lean();
  }
}
