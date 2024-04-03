import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/module'
import { UserService } from './user.service'

@Module({
  imports: [DatabaseModule],
  exports: [UserService],
  providers: [UserService],
})
export class ServiceModule {}
