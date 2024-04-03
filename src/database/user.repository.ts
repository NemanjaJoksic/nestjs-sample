import { Injectable } from '@nestjs/common'
import { UserEntity } from './user.entity'

@Injectable()
export class UserRepository {
  async findAll(): Promise<UserEntity[]> {
    return [
      { id: 1, username: 'TEST', password: 'pass' },
      { id: 2, username: 'TEST 2', password: 'yyy' },
    ]
  }

  async create(userEntity: UserEntity): Promise<UserEntity> {
    userEntity.id = 321
    return userEntity
  }
}
