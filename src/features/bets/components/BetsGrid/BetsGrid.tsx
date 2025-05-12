import { CircularProgress } from '@mui/material';

import type { Bet } from '../../../../types/bets';

import { Grid } from '../../../../components/Grid';
import { BetsCardContent } from './BetsCardContent';
import { useBetsQuery } from '../../query';


export const BetsGrid = () => {
  const { isPending, data: bets } = useBetsQuery();

  if (isPending) {
    return <CircularProgress />;
  }

  return (
    <Grid
      data={bets}
      content={(bet: Bet) => <BetsCardContent data={bet} />}
    />
  );
};