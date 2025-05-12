import type { Bet } from '../types/bets';

const MAX_BET = 50;
const MAX_ODD = 10;

const generateRandomPair = <T>(builderFn: () => T) => {
  let first = builderFn();
  let second = first;

  while (second === first) {
    second = builderFn();
  }

  return [first, second];
};

export const generateRandomBet = (): Bet => {
  const [leftTeam, rightTeam] = generateRandomPair<string>(
    () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)]
  );

  const [leftBet, rightBet] = generateRandomPair<number>(
    () => Math.floor(Math.random() * (MAX_BET + 1))
  );

  const [leftOdd, rightOdd] = generateRandomPair<number>(
    () => parseFloat((Math.random() * MAX_ODD).toFixed(1))
  );
  
  return ({
    id: Date.now().toString(),
    title: `Team ${leftTeam} vs Team ${rightTeam}`,
    bets: `${leftBet} vs ${rightBet}`,
    odds: `${leftOdd} vs ${rightOdd}`,
  });
};
