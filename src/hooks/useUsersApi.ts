import  {useState, useEffect} from 'react';
import { client } from '../utils/api-client';
import {IHttpUsersResponse, IUser} from '../types/user.types';


const useUsersApi = (initialPage: number, initialData: IUser[]): any => {
  const [data, setData] = useState<IUser[]>([]);
  const [page, setPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
 
      try {
        const {info, results}: IHttpUsersResponse = await client(`?page=${1}&results=50&seed=abc`);
        console.log(results)
        setData(results);
      } catch (error) {
        setIsError(true);
      }
 
      setIsLoading(false);
    };
 
    fetchData();
  }, [page]);
 
  return [{ data, isLoading, isError }, setPage];
};

export {useUsersApi}