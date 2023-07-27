export interface IChatDetail {
  roomId?: string;
  sender?: string;
  message?: string;
  time?: string;

  roomName?: string;
  remainingTime?: string;
  host?: string;
  participantsNum?: number;
}
