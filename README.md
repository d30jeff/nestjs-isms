# NestJS Module for [iSMS](http://www.isms.com.my/) (Malaysia)


### Installation

`yarn add nestjs-isms`


### Usage
```
    NestjsIsmsModule.register({
      username: 'USERNAME',
      password: 'PASSWORD',
      recipientNumber: '0168028426',
      message: 'Hello',
      type: NestjsIsmsType.ASCII,
      acceptTerm: true,
      logging: true,
    }),
```
