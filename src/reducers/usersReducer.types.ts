import { IUser } from "../types/user.types";
export type UserActionWithPayload = {
  type: string;
  value: IUser[];
};

export type UserActionWithStringPayload = {
  type: string;
  value: string;
};

export type UserActionWithoutPayload = {
  type: string;
};

export type UsersActionType = UserActionWithPayload | UserActionWithoutPayload | UserActionWithStringPayload;