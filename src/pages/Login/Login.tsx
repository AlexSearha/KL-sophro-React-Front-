import { useEffect } from 'react';
import { useFormik } from 'formik';
import { validate } from 'email-validator';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import * as Yup from 'yup';
import { Box, Button, TextField } from '@mui/material';
import HeaderMobile from '../../components/Layouts/Header/Header';
import { apiBackEnd } from '../../api/api';

import './style.scss';
import { useUser } from '../../store/store';
import FooterMobile from '../../components/Layouts/Footer/Footer';

function LoginPage() {
  const [isConnected, UpdateIsConnected] = useUser((state) => [
    state.isConnected,
    state.UpdateIsConnected,
  ]);

  const navigate = useNavigate();

  const fetchLogin = useMutation({
    mutationFn: async (newTodo) => {
      const result = await apiBackEnd.post('/login', newTodo);
      apiBackEnd.defaults.headers.common.Authorization = `Bearer ${result.data}`;
    },
  });

  useEffect(() => {
    if (isConnected) {
      navigate('/mon-compte');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

  const formik = useFormik({
    initialValues: {
      email: 'johndoe@hotmail.fr',
      password: 'coucou',
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
        fetchLogin.mutate(values);
        UpdateIsConnected(true);
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
