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
    console.log('appRepository=' + this.userRepository)

    return username !== 'TEST'
  }

  defaultMessage(args: ValidationArguments) {
    return 'user already exists'
  }
}
