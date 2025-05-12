import { Container, Typography, Button, Box } from '@mui/material';

import { BetsGrid } from '../features/bets/components/BetsGrid';
import { useCreateBetsMutation } from '../features/bets/query';
import { generateRandomBet } from '../utils';

export const Home = () => {
  const { mutate, isPending } = useCreateBetsMutation();
  const handleAddBet = () => {
    mutate(generateRandomBet());                                                                        
  };
  
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Betting dashboard</Typography>
      <Box sx={{ mb: 2 }}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleAddBet}
          disabled={isPending}
        >
          Generate new random card
        </Button>
      </Box>
      <BetsGrid />
    </Container>
  );
};

export default Home;