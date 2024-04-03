import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateUserRequest, User } from 'src/model/user.model'
import { UserService } from 'src/service/user.service'

@Controller()
export class UserController {
  constructor(readonly userService: UserService) {}

  @Get('/api/users')
  async getAll(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Post('/api/users')
  async create(
    @Body() body: { username: string; password: string },
  ): Promise<User> {
    const createUserRequest = new CreateUserRequest()
    createUserRequest.username = body.username
    createUserRequest.password = body.password

    return this.userService.create(createUserRequest)
  }
}
