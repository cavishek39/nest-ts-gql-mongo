// The user provider will inject the database connection into the user service.

import { Connection } from 'mongoose';
import { UserSchema } from './user.schema';

export const userProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
