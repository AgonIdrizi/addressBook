import { IUser } from "../types/user.types";

type State = {
  data:  IUser[] | null ;
  isLoading: boolean;
  isError: boolean
}

type Action =
  | { type: 'FETCH_INIT' }
  | { type: 'FETCH_SUCCESS'; payload: IUser[] }
  | { type: 'FETCH_FAILURE' }


const initialState: State = {
  isLoading: true,
  isError: false,
  data: [],
}

const dataFetchReducer = (state: State, action: Action): State => {
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
        //data: [...state.data, action.payload ],
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

export {dataFetchReducer}