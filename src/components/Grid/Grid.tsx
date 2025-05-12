import { Grid as MuiGrid, Card as MuiCard, CardContent } from '@mui/material';
import { ReactElement, ReactNode } from 'react';

interface GridProps<T> {
  data?: T[];
  content: (item: T) => ReactElement<ReactNode>;
  xs?: number;
  sm?: number;
  md?: number;
  spacing?: number;
  cardMinHeight?: number;
}

export const Grid = <T,>({
  data,
  content,
  xs = 12,
  sm = 6,
  md = 4,
  spacing = 2,
  cardMinHeight = 120,
}: GridProps<T>) => {
  return (
    <MuiGrid container spacing={spacing}>
      {data?.map((item, idx) => (
        <MuiGrid item xs={xs} sm={sm} md={md} key={idx}>
          <MuiCard sx={{ minHeight: cardMinHeight }}>
            <CardContent>{content(item)}</CardContent>
          </MuiCard>
        </MuiGrid>
      ))}
    </MuiGrid>
  );
};