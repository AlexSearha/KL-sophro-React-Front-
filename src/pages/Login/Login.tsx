// REACT
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
// FORMS & VALIDATION
import { validate } from 'email-validator';
import * as Yup from 'yup';
// MUI
import { Box, Button, TextField } from '@mui/material';
// COMPONENT
import { AlertError } from '../../components/Layouts/Alert/AlertBox';
// API
import { apiBackEnd } from '../../api/api';
// STORE
import { useUser, useUserInformations } from '../../store/store';
// CSS
import './style.scss';

function LoginPage() {
  const [isConnected, UpdateIsConnected] = useUser((state) => [
    state.isConnected,
    state.UpdateIsConnected,
  ]);
  const [errorLoginMessage, setErrorLoginMessage] = useState<string>('');
  const UpdateUserInfos = useUserInformations((state) => state.UpdateUserInfos);

  const navigate = useNavigate();

  const fetchLogin = async (newTodo: { email: string; password: string }) => {
    try {
      const result = await apiBackEnd.post('/login', newTodo);
      apiBackEnd.defaults.headers.common.Authorization = `Bearer ${result.data.accessToken}`;
      UpdateIsConnected(true);
      UpdateUserInfos(result.data.user);
    } catch (error: any) {
      if (error.response.status === 401 || error.response.status === 404) {
        setErrorLoginMessage(
          'Votre email/mot de passe est incorrect, recommencez.'
        );
      }
    }
  };

  useEffect(() => {
    if (isConnected) {
      navigate('/mon-compte');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

  const formik = useFormik({
    initialValues: {
      email: 'alexis.marouf@hotmail.fr',
      password: 'SEAsons2016*',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Votre email est invalide')
        .required('Votre e-mail est requis'),
      password: Yup.string()
        // .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
        .required('Votre mot de passe est requis'),
    }),
    onSubmit: (values) => {
      if (validate(values.email)) {
        fetchLogin(values);
      }
    },
  });
  return (
    <>
      <form className="container" onSubmit={formik.handleSubmit}>
        <Box
          className="container__form shadow"
          sx={{ flexGrow: 1, mt: '1rem' }}
        >
          <h2>Connexion</h2>
          <p>Veuillez vous identifier pour acceder à votre éspace</p>
          <TextField
            fullWidth
            type="text"
            name="email"
            label="E-mail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            type="password"
            name="password"
            label="Mot de passe"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {errorLoginMessage ? (
            <AlertError message={errorLoginMessage} />
          ) : null}
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ fontWeight: '700' }}
          >
            Se Connecter
          </Button>
          <Link className="forgotten-pw" to="/mdp-oublie">
            MOT DE PASSE OUBLIÉ ?
          </Link>
        </Box>
      </form>
      <div className="new-client">
        <p>Pas de compte ?</p>
        <Link to="/inscription">
          <Button variant="contained" sx={{ fontWeight: '700' }}>
            S&apos;INSCRIRE
          </Button>
        </Link>
      </div>
    </>
  );
}

export default LoginPage;
