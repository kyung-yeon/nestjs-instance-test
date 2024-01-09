import { Injectable } from '@nestjs/common';
import { AccountService } from './account/account.service';
import { UserService } from './user/user.service';

@Injectable()
export class AppService {
  constructor(
    private readonly accountService: AccountService,
    private readonly userService: UserService,
  ) {}

  print(): void {
    // 각각 provider 된 TestService
    this.validateSameInstance(
      this.accountService.getTestService(),
      this.userService.getTestService(),
    );

    // 하나의 모듈에서 import 받아서 각각 사용중인 CommoNService
    this.validateSameInstance(
      this.accountService.getCommonService(),
      this.userService.getCommonService(),
    );
  }

  validateSameInstance(a, b) {
    console.log(a === b);
  }
}
