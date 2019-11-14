// tslint:disable: variable-name
import { HttpService, Inject, Injectable, Logger } from '@nestjs/common';
import { from, of } from 'rxjs';
import { catchError, concatMap, filter, map, take } from 'rxjs/operators';
import {
  ISMS_ENDPOINTS,
  MAX_MESSAGE_LENGTH,
  NESTJS_ISMS_OPTIONS,
  SERVER_RESPONSE_CODES,
} from './constants';
import { NestjsIsmsOptions, NestjsIsmsType } from './interfaces';
import { ResponseCode } from './response-codes/response-codes.interface';

/**
 * Sample interface for NestjsIsmsService
 *
 * Customize this as needed to describe the NestjsIsmsService
 *
 */

interface SendSmsParams {
  type?: NestjsIsmsType;
  message: string;
  recipients: string | string[];
}

interface INestjsIsmsService {
  log(params: string): void;
  errorLog(params: string): void;
  sendSms(params: SendSmsParams): Promise<any>;
}

@Injectable()
/**
 *  You can remove the dependencies on the Logger if you don't need it.  You can also
 *  remove the `async test()` method.
 *
 *  The only thing you need to leave intact is the `@Inject(NESTJS_ISMS_OPTIONS) private _nestjs-ismsOptions`.
 *
 *  That injected dependency gives you access to the options passed in to
 *  NestjsIsmsService.
 *
 */
export class NestjsIsmsService implements INestjsIsmsService {
  private readonly logger: Logger;
  constructor(
    @Inject(NESTJS_ISMS_OPTIONS) private options: NestjsIsmsOptions,
    private readonly httpService: HttpService,
  ) {
    this.logger = new Logger('NestjsIsmsService');
    this.logger.log(`Options: ${JSON.stringify(this.options)}`);
  }

  log(message: string) {
    if (this.options.logging) {
      this.logger.log(message);
    }
  }

  errorLog(message: string) {
    if (this.options.logging) {
      this.logger.error(message);
    }
  }
  async sendSms(params: SendSmsParams): Promise<ResponseCode> {
    const { username, password, type } = this.options;
    let { recipients } = params;
    const { message, type: paramType } = params;

    const messageType = paramType || type || NestjsIsmsType.ASCII;

    if (message.length > MAX_MESSAGE_LENGTH) {
      throw new Error(`Max message exceeds ${MAX_MESSAGE_LENGTH} characters`);
    }

    if (recipients.constructor === Array) {
      recipients = Array(recipients).join(';');
    }

    return from(ISMS_ENDPOINTS)
      .pipe(
        // Ensure that they run sequentially
        concatMap(url => {
          this.log(`Fetching from ${url}`);
          return this.httpService
            .get(url, {
              headers: {
                Authorization: 'Bearer NxwgpLCp7LroHvAHg0QY8KrezIV7T1iO',
              },
              params: {
                un: username,
                pwd: password,
                agreedterm: 'YES',
                msg: message,
                dstno: recipients,
                type: messageType,
              },
            })
            .pipe(
              catchError(error => {
                this.errorLog(`Getting error from: ${url}`);
                return of(error);
              }),
            );
        }),
        // Get the response body
        map(response => SERVER_RESPONSE_CODES[response.data]),
        // Exclude errored response
        filter(response => Boolean(response)),
        // Only interested in the first succesful response
        take(1),
        catchError(error => {
          this.errorLog(error);
          return of(error);
        }),
      )
      .toPromise();
  }
}
