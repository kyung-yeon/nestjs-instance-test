import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AccountModule, UserModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
