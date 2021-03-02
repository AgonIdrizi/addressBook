import {UsersActions, UserActionWithPayload, UserActionWithStringPayload ,UserActionTypes} from './usersReducer.types'
import {UsersStateType} from '../../types/user.types'


const usersReducer = (state: UsersStateType, action: UsersActions): UsersStateType => {
  switch (action.type) {
    case UserActionTypes.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case UserActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        page: state.page + 1,
        data: [...state.data, ...(action as UserActionWithPayload).value ],
      };
    case UserActionTypes.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case UserActionTypes.SET_NATIONALITY:
      return {
        ...state,
        page:1,
        data: [],
        nationality: (action as UserActionWithStringPayload).value,
        isLoading: false,
        isError: false
      };
      case UserActionTypes.REACHED_END:
        return {
          ...state,
          more: false,
          data: [...state.data, ...(action as UserActionWithPayload).value ],
          isLoading: false,
          isError: false
        };
    default:
      throw new Error();
  }
};

export {usersReducer}