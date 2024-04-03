import { Injectable } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { UserRepository } from 'src/database/user.repository'
import { CreateUserDto, User } from 'src/model/user.model'
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

  async create(createUserDto: CreateUserDto): Promise<User> {
    await this.appValidator.validate(createUserDto)

    const user = new User()
    user.id = 123
    user.username = createUserDto.username

    return user
  }
}
