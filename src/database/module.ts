import { Module } from '@nestjs/common'
import { UserRepository } from './user.repository'

@Module({
  imports: [],
  exports: [UserRepository],
  providers: [UserRepository],
})
export class DatabaseModule {}
