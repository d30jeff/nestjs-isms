/**
 * Mapping for server response
 * @see http://www.isms.com.my/sms_api.php
 */
import { ResponseCode } from './response-codes.interface';

export const SUCCESS: ResponseCode = {
  description: 'SUCCESS',
  details: 'Message Sent.',
};

export const UNKNOWN_ERROR: ResponseCode = {
  description: 'UNKNOWN ERROR',
  details: 'Unknown error. Please contact the administrator.',
};

export const AUTHENTICATION_FAILED: ResponseCode = {
  description: 'AUTHENTICATION FAILED',
  details: 'Your username or password are incorrect.',
};

export const ACCOUNT_SUSPENDED_OR_EXPIRED: ResponseCode = {
  description: 'ACCOUNT SUSPENDED / EXPIRED',
  details:
    'Your account has been expired or suspended. Please contact the administrator.',
};

export const IP_NOT_ALLOWED: ResponseCode = {
  description: 'IP NOT ALLOWED',
  details:
    'Your IP is not allowed to send SMS. Please contact the administrator.',
};

export const INSUFFICIENT_CREDITS: ResponseCode = {
  description: 'INSUFFICIENT CREDITS',
  details: 'You have run out of credits. Please reload your credits.',
};

export const INVALID_SMS_TYPE: ResponseCode = {
  description: 'INVALID SMS TYPE',
  details: 'Your SMS type is not supported.',
};

export const INVALID_BODY_LENGTH: ResponseCode = {
  description: 'INVALID BODY LENGTH (1-900)',
  details: 'Your SMS body has exceed the length. Max limit = 900',
};

export const INVALID_HEX_BODY: ResponseCode = {
  description: 'INVALID HEX BODY',
  details: 'Your Hex body format is wrong.'
}

export const MISSING_PARAMETER: ResponseCode = {
  description: 'MISSING PARAMETER',
  details: 'One or more required parameters are missing.'
}
