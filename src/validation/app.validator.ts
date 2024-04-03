import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { validate } from 'class-validator'

@Injectable()
export class AppValidator {
  async validate(object: any) {
    const errors = await validate(object)
    if (errors.length > 0) {
      console.log(errors)

      const messages = []
      errors.forEach((error) => {
        Object.entries(error.constraints).forEach(([, message]) => {
          messages.push(message)
        })
      })

      throw new HttpException(
        {
          message: 'Invalid request',
          status: HttpStatus.BAD_REQUEST,
          errors: messages,
        },
        HttpStatus.BAD_REQUEST,
      )
    }
  }
}
