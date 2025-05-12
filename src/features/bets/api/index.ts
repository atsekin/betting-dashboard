import type { Bet } from '../../../types/bets';

import { bets } from '../mocks/mocks';

export const getBets = async (): Promise<Bet[]> => {
  return new Promise(resolve => {
    setTimeout(
      () => resolve(bets),
      500
    );
  });
};

export const postBet = async (bet: Bet): Promise<Bet> => {
  return new Promise(resolve => {
    setTimeout(
      () => resolve(bet),
      500,
    );
  });
};
