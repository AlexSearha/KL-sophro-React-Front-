import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import HeaderMobile from '../../components/Header/Header';
import FooterMobile from '../../components/Footer/Footer';

import './style.scss';

function SignUpPage() {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      checkpass: '',
      age: '',
      student: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required('Votre prénom est requis'),
      lastname: Yup.string().required('Votre nom est requis'),
      email: Yup.string().email('Votre email est invalide').required('Requis'),
      password: Yup.string()
        .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
        .required('Requis'),
      checkpass: Yup.string()
        .oneOf(
          [Yup.ref('password'), null],
          'Les mots de passe ne correspondent pas'
        )
        .required('Confirmation mot de passe requise'),
      age: Yup.number().required('Votre age est requis'),
      student: Yup.boolean().required('Votre statut étudiant est requis'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
            name="firstname"
            label="Prénom"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
            helperText={formik.touched.firstname && formik.errors.firstname}
          />
          <TextField
            fullWidth
            type="text"
            name="lastname"
            label="Nom"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
            helperText={formik.touched.lastname && formik.errors.lastname}
          />
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
          <TextField
            id="check-password"
            label="Confirmation mot de passe"
            name="checkpass"
            type="password"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.checkpass}
            error={formik.touched.checkpass && Boolean(formik.errors.checkpass)}
            helperText={formik.touched.checkpass && formik.errors.checkpass}
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

export default SignUpPage;
