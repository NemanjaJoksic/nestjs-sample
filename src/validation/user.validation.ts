import { Injectable } from '@nestjs/common'
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator'
import { UserRepository } from 'src/database/user.repository'

@Injectable()
@ValidatorConstraint({ name: 'UserNotExist', async: true })
export class UserNotExist implements ValidatorConstraintInterface {
  constructor(private readonly userRepository: UserRepository) {}

  async validate(username: string): Promise<boolean> {
    const exists = await this.userRepository.exists(username)
    return !exists
  }

  defaultMessage(args: ValidationArguments) {
    return 'user already exists'
  }
}
