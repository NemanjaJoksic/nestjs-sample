import { Injectable } from '@nestjs/common'
import { UserEntity } from './user.entity'

@Injectable()
export class UserRepository {
  userEntities: UserEntity[]
  nextUserId: number

  constructor() {
    this.userEntities = [
      { id: 1, username: 'TEST', password: 'pass' },
      { id: 2, username: 'TEST 2', password: 'yyy' },
    ]

    this.nextUserId = 3
  }

  async findAll(): Promise<UserEntity[]> {
    return this.userEntities
  }

  async exists(username: string): Promise<boolean> {
    const x = this.userEntities.some(
      (userEntity) => userEntity.username === username,
    )

    console.log(x)
    return x
  }

  async create(userEntity: UserEntity): Promise<UserEntity> {
    userEntity.id = this.nextUserId++
    this.userEntities.push(userEntity)
    return userEntity
  }
}
