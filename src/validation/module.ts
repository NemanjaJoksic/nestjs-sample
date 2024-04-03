import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/module'
import { AppValidator } from './app.validator'

@Module({
  imports: [DatabaseModule],
  providers: [AppValidator],
  exports: [AppValidator],
})
export class ValidationModule {}
