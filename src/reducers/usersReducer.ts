import {UsersActionType, UserActionWithPayload} from './usersReducer.types'
import {UsersStateType} from '../types/user.types'


const usersReducer = (state: UsersStateType, action: UsersActionType) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        page: state.page + 1,
        data: [...state.data, ...(action as UserActionWithPayload).value ],
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      case 'REACHED_END':
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