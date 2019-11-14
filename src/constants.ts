import {
  ACCOUNT_SUSPENDED_OR_EXPIRED,
  AUTHENTICATION_FAILED,
  INSUFFICIENT_CREDITS,
  INVALID_BODY_LENGTH,
  INVALID_HEX_BODY,
  INVALID_SMS_TYPE,
  IP_NOT_ALLOWED,
  MISSING_PARAMETER,
  SUCCESS,
  UNKNOWN_ERROR,
} from './response-codes/response-codes';
import { ServerResponseCode } from './response-codes/response-codes.interface';
export const NESTJS_ISMS_OPTIONS = 'NESTJS_ISMS_OPTIONS';

export const MAX_MESSAGE_LENGTH = 700;

export const ISMS_ENDPOINTS = [
  'https://www.isms.com.my/isms_send.php',
  'https://ww2.isms.com.my/isms_send.php',
  'https://www.vocotext.com/isms_send.php',
];

export const SERVER_RESPONSE_CODES: ServerResponseCode = {
  '2000 = SUCCESS': SUCCESS,
  '-1000': UNKNOWN_ERROR,
  '-1001': AUTHENTICATION_FAILED,
  '-1002': ACCOUNT_SUSPENDED_OR_EXPIRED,
  '-1003': IP_NOT_ALLOWED,
  '-1004': INSUFFICIENT_CREDITS,
  '-1005': INVALID_SMS_TYPE,
  '-1006': INVALID_BODY_LENGTH,
  '-1007': INVALID_HEX_BODY,
  '-1008': MISSING_PARAMETER,
};
