import { Typography } from '@mui/material';
import type { Bet } from '../../../../types/bets';

type BetsCardContentProps = {
  data: Bet;
}

export const BetsCardContent = ({ data }: BetsCardContentProps) => (
  <>
    <Typography variant="h6">{data.title}</Typography>
    <Typography variant="body2">Bets: {data.bets}</Typography>
    <Typography variant="body2">Odds: {data.odds}</Typography>
  </>
);