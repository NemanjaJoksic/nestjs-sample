import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/module'
import { AppValidator } from './app.validator'
import { UserNotExist } from './user.validation'

@Module({
  imports: [DatabaseModule],
  providers: [AppValidator, UserNotExist],
  exports: [AppValidator, UserNotExist],
})
export class ValidationModule {}
