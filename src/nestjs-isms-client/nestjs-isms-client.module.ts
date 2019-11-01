import { NestjsIsmsType } from './../interfaces/nestjs-isms-options.interface';
/**
 *  NestjsIsmsClientModule is a testing module that verifies that
 *  NestjsIsmsModule was generated properly.
 *
 *  You can quickly verify this by running `npm run start:dev`, and then
 *  connecting to `http://localhost:3000` with your browser.  It should return
 *  a custom message like `Hello from NestjsIsmsModule`.
 *
 *  Once you begin customizing NestjsIsmsModule, you'll probably want
 *  to delete this module.
 */
import { Module } from '@nestjs/common';
import { NestjsIsmsClientController } from './nestjs-isms-client.controller';
import { NestjsIsmsModule } from '../nestjs-isms.module';

@Module({
  controllers: [NestjsIsmsClientController],
  imports: [
    NestjsIsmsModule.register({
      username: 'deojeff',
      password: 'password',
      recipientNumber: '0168028426',
      message: 'Hello',
      type: NestjsIsmsType.ASCII,
      acceptTerm: true,
      logging: true,
    }),
  ],
})
export class NestjsIsmsClientModule {}
