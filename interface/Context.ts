type IResponse = {
  roomID: number;
  roomName: string;
  remainingTime: string;
  host: string;
  participantsNum: number;
};

export type IContext = {
  context?: boolean;
  ddukddak?: boolean;
  roomInfo?: IResponse;
};
