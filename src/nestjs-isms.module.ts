import {
  Module,
  DynamicModule,
  Provider,
  Global,
  HttpModule,
} from '@nestjs/common';
import { NestjsIsmsService } from './nestjs-isms.service';
import { NESTJS_ISMS_OPTIONS } from './constants';
import {
  NestjsIsmsOptions,
  NestjsIsmsAsyncOptions,
  NestjsIsmsOptionsFactory,
} from './interfaces';
import { createNestjsIsmsProviders } from './nestjs-isms.providers';

@Global()
@Module({
  imports: [HttpModule],
  providers: [NestjsIsmsService],
  exports: [NestjsIsmsService],
})
export class NestjsIsmsModule {
  /**
   * Registers a configured NestjsIsms Module for import into the current module
   */
  public static register(options: NestjsIsmsOptions): DynamicModule {
    return {
      module: NestjsIsmsModule,
      providers: createNestjsIsmsProviders(options),
    };
  }

  /**
   * Registers a configured NestjsIsms Module for import into the current module
   * using dynamic options (factory, etc)
   */
  public static registerAsync(options: NestjsIsmsAsyncOptions): DynamicModule {
    return {
      module: NestjsIsmsModule,
      providers: [...this.createProviders(options)],
    };
  }

  private static createProviders(options: NestjsIsmsAsyncOptions): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createOptionsProvider(options)];
    }

    return [
      this.createOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createOptionsProvider(
    options: NestjsIsmsAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: NESTJS_ISMS_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    // For useExisting...
    return {
      provide: NESTJS_ISMS_OPTIONS,
      useFactory: async (optionsFactory: NestjsIsmsOptionsFactory) =>
        await optionsFactory.createNestjsIsmsOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }
}
