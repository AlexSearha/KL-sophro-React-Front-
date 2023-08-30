import { useFormik } from 'formik';
import { validate } from 'email-validator';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Box, Button, TextField } from '@mui/material';
import HeaderMobile from '../../components/Header/Header';
import FooterMobile from '../../components/Footer/Footer';

import './style.scss';

function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Votre email est invalide')
        .required('Votre e-mail est requis'),
      password: Yup.string()
        .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
        .required('Votre mot de passe est requis'),
    }),
    onSubmit: (values) => {
      if (validate(values.email)) {
        alert(JSON.stringify(values, null, 2));
      }
    },
  });
  return (
    <>
      <HeaderMobile />
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
      <FooterMobile />
    </>
  );
}

export default LoginPage;
