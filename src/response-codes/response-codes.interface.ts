export interface ServerResponseCode {
  [key: string]: ResponseCode;
}

export interface ResponseCode {
  description: string;
  details: string;
}
