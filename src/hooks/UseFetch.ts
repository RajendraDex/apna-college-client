import { useEffect, useState } from 'react';

type TypeInitialValues = [] | null;
type TypeFetchFun = () => Promise<any>;

interface IUseFetchResponse {
  isFetching: boolean;
  error: string;
  fetchData: any;
}

const useFetch = (fetchFun: TypeFetchFun,initialValues: TypeInitialValues): IUseFetchResponse => {
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [fetchData, setFetchData] = useState(initialValues);

  useEffect(() => {
    const fetchDataFun = async () => {
      setIsFetching(true);
      try {
        const data = await fetchFun();
        setFetchData(data);
      } catch (e: any) {
        const message = e.message || 'Failed to fetch data';
        setError(message);
      } finally {
        setIsFetching(false);
      }
    };

    fetchDataFun();
  }, [fetchFun]);

  return {
    error,
    isFetching,
    fetchData,
  };
};

export default useFetch;
