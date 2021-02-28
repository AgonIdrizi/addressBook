import { IUser } from "../types/user.types";
 export type UserActionWithPayload = {
  type: string;
  value: IUser[];
};

type UserActionWithoutPayload = {
  type: string;
};

export type UsersActionType = UserActionWithPayload | UserActionWithoutPayload;