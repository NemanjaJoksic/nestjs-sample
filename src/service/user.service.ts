import { Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { UserRepository } from 'src/database/user.repository'
import { User } from 'src/model/user.model'

@Injectable()
export class UserService {
  constructor(readonly userRepository: UserRepository) {}

  async findAll(): Promise<User[]> {
    const userEntities = await this.userRepository.findAll()
    return plainToInstance(User, userEntities)
  }
}
