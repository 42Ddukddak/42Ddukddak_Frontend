import { IResponse } from './Context';

export interface IChatDetail {
  sender?: string;
  message?: string;
  time?: string;
  roomInfo?: IResponse;
}
