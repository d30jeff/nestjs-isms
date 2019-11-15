# NestJS Module for [iSMS](http://www.isms.com.my/) (Malaysia)


### Installation

`yarn add nestjs-isms`


### Usage

**Register in Module**

```
@Module({
  imports: [NestjsIsmsModule.register({
    username: '<USERNAME>',
    password: '<PASSWORD>',
    acceptTerm: true,
    recipientNumber: '0129876543', // Optional
    message: 'Hello', // Optional
    type: NestjsIsmsType.ASCII, // Optional
    logging: true, // Optional
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

**Use in Controller**

```
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly nestjsIsmsService: NestjsIsmsService,
    ) {}

  @Get()
  getHello() {
    this.nestjsIsmsService.sendSms({
      recipients: '0129876543',
      message: 'Wazzzzzzzzzzzzup'
    })
  }
}
```

Typing for `sendSms`

```
interface SendSmsParams {
  type?: NestjsIsmsType;
  message: string;
  recipients: string | string[];
}
```
