import { Injectable } from '@nestjs/common';
import { TestService } from '../test/test.service';
import { CommonService } from '../common-module/common.service';

@Injectable()
export class AccountService {
  constructor(
    private readonly commonService: CommonService,
    private readonly testService: TestService,
  ) {}

  getTestService() {
    return this.testService;
  }

  getCommonService() {
    return this.commonService;
  }
}
