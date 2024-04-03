import { Expose } from 'class-transformer'
import { IsNotEmpty, Validate } from 'class-validator'
import { UserNotExist } from 'src/validation/user.validation'

export class User {
  @Expose()
  id: number
  @Expose()
  username: string
}

export class CreateUserRequest {
  @IsNotEmpty()
  @Validate(UserNotExist)
  username: string
  @IsNotEmpty()
  password: string
}
