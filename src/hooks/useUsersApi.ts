import  {useState, useEffect, useReducer, Dispatch, SetStateAction} from 'react';
import { client } from '../utils/api-client';
import {IHttpUsersResponse, IUser} from '../types/user.types';


interface IUsersState {
  data:  any ;
  isLoading: boolean;
  isError: boolean
}

type Action =
  | { type: 'FETCH_INIT' }
  | { type: 'FETCH_SUCCESS'; payload: IUser[] }
  | { type: 'FETCH_FAILURE' }
  | { type: 'LOAD_MORE'}


const initialState: IUsersState = {
  isLoading: true,
  isError: false,
  data: [],
}

const dataFetchReducer = (state: IUsersState, action: Action): IUsersState => {
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
        //data: [...state.data, action.payload ]
        data: state.data.concat(action.payload),
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



function  useUsersApi(initialPage: number, initialData: []):[IUsersState, Dispatch<SetStateAction<number>>] {
  // const [data, setData] = useState<IUser[]>([]);
     const [page, setPage] = useState(initialPage);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  


  const [state, dispatch] = useReducer(dataFetchReducer, initialState);
 
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
 
      try {
        const {info, results}: IHttpUsersResponse = await client(`?page=${1}&results=50`);
        console.log(results)
        dispatch({ type: 'FETCH_SUCCESS', payload: results });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE' });
      }
 
    };
 
    fetchData();
  }, [page]);
 
  return [state, setPage];
};

export {useUsersApi}