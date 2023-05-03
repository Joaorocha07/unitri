/* eslint-disable jsx-a11y/anchor-is-valid */
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button, Link, Checkbox, FormControlLabel, Box,
  TextField, Typography, InputAdornment, IconButton, Grid,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthLogin';
import { loginFailure, loginSuccess } from '../../store/actions';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const limiteUserId = (event) => {
    const { value } = event.target;
    const limitedValue = value.slice(0, 9);
    // eslint-disable-next-line no-param-reassign
    event.target.value = limitedValue;
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleSubmit = async (values, { setSubmitting }) => {
  //   setTimeout(() => {
  //     console.log(JSON.stringify(values, null, 2));
  //     setSubmitting(false);
  //   }, 400);

  //   try {
  //     const data = await login(values.userId, values.password, 'DV');
  //     console.log(data.error);


  //     console.log('teste');

  //     // Verificar se o login foi bem sucedido
  //   //   if (data.error === true) {
  //   //     // Exibir mensagem de erro para o usuário
  //   //     console.log('Usuário e/ou senha inválido(s) ---');
  //   //   } else if (data.error === false) {
  //   //     dispatch(loginSuccess(values.userId)); // atualiza o estado global com o userId
  //   //     console.log('Login bem sucedido!', data);
  //   //     navigate('/Home');
  //   //   }
  //   } catch (error) {
  //     dispatch(loginFailure(error));
  //     console.log('Login mal sucedido!', error);
  //   }
  // };

  const handleSubmit = async (values) => {
    try {
      const data = await login(values.userId, values.password, 'DV');
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={{ userId: '', password: '', manterConectado: false }}
      validate={(values) => {
        const errors = {};
        if (!values.userId) {
          errors.userId = 'Campo obrigatório';
        } else if (
          !/^[0-9]{9}$/i.test(values.userId)
        ) {
          errors.userId = 'Código inválido';
        }

        if (!values.password) {
          errors.password = 'Campo obrigatário';
        }

        return errors;
      }}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        handleChange,
        isSubmitting,
      }) => (
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          component={Form}
          noValidate
          autoComplete="off"
          spacing={1}
        >
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
            item
            direction="row"
          >
            <Grid
              xs={9}
              item
            >
              <TextField
                fullWidth
                htmlFor="userId"
                type="number"
                name="userId"
                id="userId"
                required
                label="Código de usuário"
                sx={{
                  height: '3rem',
                }}
                onChange={(event) => {
                  limiteUserId(event);
                  handleChange(event);
                }}
                value={values.userId}
                helperText={errors.userId}
                error={Boolean(errors.userId)}
              />
            </Grid>
            <Grid
              xs={9}
              item
            >
              <TextField
                fullWidth
                htmlFor="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                required
                label="Senha"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>),
                }}
                sx={{
                  height: '3rem',
                }}
                onChange={handleChange}
                value={values.password}
                helperText={errors.password}
                error={Boolean(errors.password)}
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            alignItems="center"
            justifyContent="center"
            direction="row"
            spacing={1}
          >
            <Grid
              xs={9}
              item
              mt={1}
            >
              <Typography
                href="#"
                variant="body2"
                textAlign="end"
              >
                Esqueceu seus dados?
                <Link
                  href="https://www.google.com"
                  target="_blank"
                  variant="body1"
                  underline="hover"
                >
                  <Box
                    component="span"
                    sx={{
                      ml: '2px',
                      textTransform: 'capitalize',
                    }}
                  >
                    Clique
                    {' '}
                  </Box>
                  aqui
                </Link>
              </Typography>
            </Grid>
            <Grid
              xs={9}
              item
            >
              <FormControlLabel
                control={<Checkbox value="manterConectado" color="primary" />}
                label="Manter conectado"
              />
            </Grid>
            <Grid
              item
              xs={9}
              mt={3}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
              >
                Entrar
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            item
            alignItems="center"
            justifyContent="center"
            my={8}
          >
            <Grid
              item
              xs={9}
            >
              <Typography
                textAlign="center"
                variant="body2"
              >
                Primeiro acesso?
                <br />
                <Link
                  href="www.google.com"
                  target="_blank"
                  underline="hover"
                >
                  <Box
                    component="span"
                    sx={{
                      textTransform: 'capitalize',
                    }}
                  >
                    Crie
                  </Box>
                  sua conta aqui
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
};

export default LoginForm;
