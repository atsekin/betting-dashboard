import type { Bet } from '../../../../types/bets';
import { bets } from '../../mocks/mocks';
import { Grid } from '../../../../components/Grid';
import { BetsCardContent } from './BetsCardContent';


export const BetsGrid = () => {
  return (
    <Grid
      data={bets}
      content={(bet: Bet) => <BetsCardContent data={bet} />}
    />
  );
};