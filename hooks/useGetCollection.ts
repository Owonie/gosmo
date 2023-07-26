import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { CollectionData } from '../type/objekt';

interface UseAxiosResponse<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useGetCollection = <T>(owner: string): UseAxiosResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios
      .get<T>(
        `https://polygon-mainnet.g.alchemy.com/nft/v2/OFnXkAWjmJ-emPdPy1fBsh-YVJgCo4MA/getNFTs?contractAddresses[]=0xA4B37bE40F7b231Ee9574c4b16b7DDb7EAcDC99B&contractAddresses[]=0x0fB69F54bA90f17578a59823E09e5a1f8F3FA200&owner=${owner}&withMetadata=true&orderBy=TRANSFERTIME`
      )
      .then((response: AxiosResponse<T>) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error: Error) => {
        setError(error);
        setLoading(false);
      });
  }, [owner]);

  return { data, loading, error };
};

export default useGetCollection;
