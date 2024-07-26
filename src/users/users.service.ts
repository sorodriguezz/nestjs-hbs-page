import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'seba',
      password: bcrypt.hashSync('1234', 10),
    },
    {
      userId: 2,
      username: 'maria',
      password: bcrypt.hashSync('1234', 10),
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
