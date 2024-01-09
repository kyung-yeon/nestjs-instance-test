import { Module } from '@nestjs/common';
import { TestService } from '../test/test.service';
import { UserService } from './user.service';
import { CommonModule } from '../common-module/common.module';

@Module({
  imports: [CommonModule],
  providers: [TestService, UserService],
  exports: [UserService],
})
export class UserModule {}
