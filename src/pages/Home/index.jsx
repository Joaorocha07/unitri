import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  IconButton,
} from '@mui/material';
import { Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.logged);

  if (!isLoggedIn) {
    navigate('/Login');
    return null;
  }

  const handleLogout = () => {
    // lógica de logout aqui
    navigate('/login');
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
