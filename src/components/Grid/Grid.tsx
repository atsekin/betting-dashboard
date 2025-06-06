import { Grid as MuiGrid, Card as MuiCard, CardContent } from '@mui/material';
import type { GridProps as MuiGridProps } from '@mui/material';
import type { ReactElement, ReactNode } from 'react';

type GridProps<T> = {
  data?: T[];
  content: (item: T) => ReactElement<ReactNode>;
  spacing?: number;
  cardMinHeight?: number;
  size?: MuiGridProps['size'];
}

export const Grid = <T extends { id: string },>({
  data,
  content,
  spacing = 2,
  cardMinHeight = 120,
  size = { xs: 12, sm: 6, md: 4 }
}: GridProps<T>) => {
  return (
    <MuiGrid container spacing={spacing}>
      {data?.map((item) => (
        <MuiGrid key={item.id} size={size}>
          <MuiCard sx={{ minHeight: cardMinHeight }}>
            <CardContent>{content(item)}</CardContent>
          </MuiCard>
        </MuiGrid>
      ))}
    </MuiGrid>
  );
};