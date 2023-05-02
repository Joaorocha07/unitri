import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  IconButton,
} from '@mui/material';
import { Logout } from '@mui/icons-material';

const Home = () => {
  const handleLogout = () => {
    // lógica de logout aqui
  };

  return (
    <>
      <CssBaseline />
      <Box
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="auto"
        minHeight="100vh"
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          component="div"
          height="100vh"
        >
          <Grid item>
            <Typography
              variant="h3"
              component="h1"
              my={1}
            >
              Tela Home Assoec!
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
              color="inherit"
              onClick={handleLogout}
              aria-label="Sair"
              sx={{ ml: 2 }}
            >
              <Logout />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
