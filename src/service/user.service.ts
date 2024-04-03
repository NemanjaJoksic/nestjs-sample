import { Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { UserEntity } from 'src/database/user.entity'
import { UserRepository } from 'src/database/user.repository'
import { CreateUserRequest, User } from 'src/model/user.model'
import { AppValidator } from 'src/validation/app.validator'

@Injectable()
export class UserService {
  constructor(
    readonly appValidator: AppValidator,
    readonly userRepository: UserRepository,
  ) {}

  async findAll(): Promise<User[]> {
    const userEntities = await this.userRepository.findAll()
    return plainToInstance(User, userEntities)
  }

  async create(createUserRequest: CreateUserRequest): Promise<User> {
    await this.appValidator.validate(createUserRequest)

    const userEntity = new UserEntity()
    userEntity.username = createUserRequest.username
    userEntity.password = createUserRequest.password

    const createdUserEntity = this.userRepository.create(userEntity)
    return plainToInstance(User, createdUserEntity)
  }
}
