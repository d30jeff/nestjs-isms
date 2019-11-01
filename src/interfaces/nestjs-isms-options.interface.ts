// tslint:disable: no-empty-interface
export enum NestjsIsmsType {
  ASCII = 1,
  UNICODE = 2,
}

export interface NestjsIsmsOptions {
  username: string;
  password: string;
  recipientNumber: string;
  message: string;
  type?: NestjsIsmsType;
  acceptTerm: boolean;
  senderId?: string;
  logging?: boolean;
}
