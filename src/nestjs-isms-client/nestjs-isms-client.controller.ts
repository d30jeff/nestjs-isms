/**
 *  NestjsIsmsClientController is a testing controller that verifies that
 *  NestjsIsmsModule was generated properly.
 *
 *  You can quickly verify this by running `npm run start:dev`, and then
 *  connecting to `http://localhost:3000` with your browser.  It should return
 *  a custom message like `Hello from NestjsIsmsModule`.
 *
 *  Once you begin customizing NestjsIsmsModule, you'll probably want
 *  to delete this controller.
 */
import { Controller, Get } from '@nestjs/common';
import { NestjsIsmsService } from '../nestjs-isms.service';

@Controller()
export class NestjsIsmsClientController {
  constructor(private readonly nestjsIsmsService: NestjsIsmsService) {}

  @Get()
  index() {
    return this.nestjsIsmsService.sendSms({
      recipients: '0168028426',
      message: 'Hello World',
    });
  }
}
