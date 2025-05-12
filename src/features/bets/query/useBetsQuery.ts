import { useQuery } from '@tanstack/react-query';

import { getBets } from '../api';

export const useBetsQuery = () => {
  return useQuery({
    queryKey: ['bets'],
    queryFn: getBets,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
