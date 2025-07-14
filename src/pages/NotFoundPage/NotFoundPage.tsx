import { Box, Container } from '@mui/material';
import Lottie from 'lottie-react';
import { Button, notFoundAnimation } from '@shared';

function NotFoundPage() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >
        <Lottie animationData={notFoundAnimation} loop={true} style={{ width: 300, height: 300 }} />
        <Button
          variant="contained"
          href="/"
          sx={{
            mt: 3,
          }}
        >
          Go home
        </Button>
      </Box>
    </Container>
  );
}

export default NotFoundPage;
