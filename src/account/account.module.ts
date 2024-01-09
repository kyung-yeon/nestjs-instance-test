import { Module } from '@nestjs/common';
import { TestService } from '../test/test.service';
import { AccountService } from './account.service';
import { CommonModule } from '../common-module/common.module';

@Module({
  imports: [CommonModule],
  providers: [TestService, AccountService],
  exports: [AccountService],
})
export class AccountModule {}
