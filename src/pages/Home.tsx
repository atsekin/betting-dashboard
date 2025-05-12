import { Container, Typography, Button, Box } from '@mui/material';

import { BetsGrid } from '../features/bets/components/BetsGrid';

const Home = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Betting dashboard</Typography>
      <Box sx={{ mb: 2 }}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
        >
          Generate new random card
        </Button>
      </Box>
      <BetsGrid />
    </Container>
  );
};

export default Home;