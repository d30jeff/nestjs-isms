import { NestjsIsmsOptions } from './interfaces';

import { NESTJS_ISMS_OPTIONS } from './constants';

export function createNestjsIsmsProviders(
  options: NestjsIsmsOptions,
) {
  return [
    {
      provide: NESTJS_ISMS_OPTIONS,
      useValue: options,
    },
  ];
}
