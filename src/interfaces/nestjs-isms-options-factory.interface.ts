import {
  NestjsIsmsOptions,
} from './nestjs-isms-options.interface';

export interface NestjsIsmsOptionsFactory {
  createNestjsIsmsOptions():
    | Promise<NestjsIsmsOptions>
    | NestjsIsmsOptions;
}
