import { IUser } from "../../types/user.types";

export enum UserActionTypes {
  FETCH_INIT= 'FETCH_INIT',
  FETCH_SUCCESS='FETCH_SUCCESS',
  FETCH_FAILURE= 'FETCH_FAILURE',
  SET_NATIONALITY= 'SET_NATIONALITY',
  REACHED_END= 'REACHED_END'
}

export type UserActionWithPayload = {
  type:  typeof UserActionTypes.FETCH_SUCCESS | typeof UserActionTypes.REACHED_END
  value: IUser[];
};

export type UserActionWithStringPayload = {
  type: typeof UserActionTypes.SET_NATIONALITY;
  value: string;
};

export type UserActionWithoutPayload = {
  type:  typeof UserActionTypes.FETCH_INIT | typeof UserActionTypes.FETCH_FAILURE;
};

export type UsersActions = UserActionWithPayload | UserActionWithoutPayload | UserActionWithStringPayload;