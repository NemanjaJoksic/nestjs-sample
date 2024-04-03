import { Module } from '@nestjs/common'
import { ServiceModule } from 'src/service/module'
import { UserController } from './user.controller'

@Module({
  imports: [ServiceModule],
  controllers: [UserController],
})
export class ControllerModule {}
