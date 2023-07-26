type IResponse = {
  roomID: number;
  roomName: string;
  remainingTime: number;
  host: string;
  participantsNum: number;
};

export type IContext = {
  context?: boolean;
  ddukddak?: boolean;
  roomInfo?: IResponse;
};
