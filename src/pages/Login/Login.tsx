import { useFormik } from 'formik';
import { validate } from 'email-validator';
import * as Yup from 'yup';
import { Box, Button, TextField } from '@mui/material';
import HeaderMobile from '../../components/Header/Header';
import FooterMobile from '../../components/Footer/Footer';

import './style.scss';
import { Link } from 'react-router-dom';

function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Votre email est invalide').required('Requis'),
      password: Yup.string()
        .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
        .required('Requis'),
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
        <Box className="container__form" sx={{ flexGrow: 1, mt: '1rem' }}>
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
          <Button variant="contained" type="submit">
            Se Connecter
          </Button>
          <Link className="container__form-signup" to="/enregistrement">
            Pas de compte ? Créér en un!
          </Link>
        </Box>
      </form>
      <FooterMobile />
    </>
  );
}

export default LoginPage;