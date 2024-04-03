import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/module'
import { UserService } from './user.service'
import { ValidationModule } from 'src/validation/module'

@Module({
  imports: [DatabaseModule, ValidationModule],
  exports: [UserService],
  providers: [UserService],
})
export class ServiceModule {}
