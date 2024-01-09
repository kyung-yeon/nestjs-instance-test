import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { UserModule } from './user/user.module';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AccountModule, UserModule],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  it('instance validate', () => {
    appService.print();
  });
});
