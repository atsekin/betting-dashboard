import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postBet } from '../api';
import type { Bet } from '../../../types/bets';

export const useCreateBetsMutation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: postBet,
    onMutate: (newBet) => {
      queryClient.setQueryData(
        ['bets'],
        (old: Bet[]) => [...old, newBet]
      );
    }
  });
};
