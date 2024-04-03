import { Controller, Get } from '@nestjs/common'
import { User } from 'src/model/user.model'
import { UserService } from 'src/service/user.service'

@Controller()
export class UserController {
  constructor(readonly userService: UserService) {}

  @Get('/api/users')
  async getAll(): Promise<User[]> {
    return this.userService.findAll()
  }
}
