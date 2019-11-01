/* Dependencies */
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

/* Interfaces */
import {
  NestjsIsmsOptions,
} from './nestjs-isms-options.interface';
import {
  NestjsIsmsOptionsFactory,
} from './nestjs-isms-options-factory.interface';

export interface NestjsIsmsAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useExisting?: Type<NestjsIsmsOptionsFactory>;
  useClass?: Type<NestjsIsmsOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<NestjsIsmsOptions> | NestjsIsmsOptions;
}