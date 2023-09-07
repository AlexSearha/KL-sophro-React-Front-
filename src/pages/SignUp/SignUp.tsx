import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// FORMIK
import { Formik } from 'formik';
import * as Yup from 'yup';
// MUI
import { Alert, Box, Button, TextField } from '@mui/material';
// STORE
import { useMutation } from '@tanstack/react-query';
import useUser from '../../store/store';
// COMPONENTS
import StudentSelect from './StudentSelect/StudentSelect';
import HeaderMobile from '../../components/Layouts/Header/Header';
import FooterMobile from '../../components/Footer/Footer';
import DateOfBirthDatePicker from './DateOfBirthDatePicker/DateOfBirthDatePicker';
// API
import { apiBackEnd } from '../../api/api';
// CSS
import './style.scss';

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  checkpass: string;
  dateOfBirth: string;
  student: string;
}

function SignUpPage() {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isConnected, UpdateIsConnected] = useUser((state) => [
    state.isConnected,
    state.UpdateIsConnected,
  ]);

  const navigate = useNavigate();

  const fetchSignUp = useMutation({
    mutationFn: (data) => {
      return apiBackEnd.post('/client', data);
    },
  });

  function fetchSubmit(values: FormValues) {
    fetchSignUp.mutate(values);
  }
  // Redirect to HOME if not connected
  useEffect(() => {
    if (isConnected) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

  const initialValues: FormValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    checkpass: '',
    dateOfBirth: '',
    student: '',
  };

  const handleSubmit = (values: FormValues) => {
    fetchSubmit(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        firstname: Yup.string().required('Votre prénom est requis'),
        lastname: Yup.string().required('Votre nom est requis'),
        email: Yup.string()
          .email('Votre email est invalide')
          .required('Requis'),
        password: Yup.string()
          .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
          .required('Votre mot de passe est requis'),
        checkpass: Yup.string()
          .oneOf(
            [Yup.ref('password'), null],
            'Les mots de passe ne correspondent pas'
          )
          .required('Confirmation mot de passe requis'),
        dateOfBirth: Yup.string().required('Votre age est requis'),
        student: Yup.string().required('Votre statut étudiant est requis'),
      })}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <>
          <HeaderMobile />
          <form className="container" onSubmit={formik.handleSubmit}>
            <Box
              className="container__form shadow"
              sx={{ flexGrow: 1, mt: '1rem' }}
            >
              <h2>Inscription</h2>
              <p>Créer votre compte pour accédes à votre espace</p>
              <div className="names">
                <TextField
                  fullWidth
                  type="text"
                  name="firstname"
                  label="Prénom"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstname}
                  error={
                    formik.touched.firstname && Boolean(formik.errors.firstname)
                  }
                  helperText={
                    formik.touched.firstname && formik.errors.firstname
                  }
                />
                <TextField
                  fullWidth
                  type="text"
                  name="lastname"
                  label="Nom"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastname}
                  error={
                    formik.touched.lastname && Boolean(formik.errors.lastname)
                  }
                  helperText={formik.touched.lastname && formik.errors.lastname}
                />
              </div>
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
              <div className="passwords">
                <TextField
                  fullWidth
                  type="password"
                  name="password"
                  label="Mot de passe"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                  fullWidth
                  id="check-password"
                  label="Confirmation mot de passe"
                  name="checkpass"
                  type="password"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  value={formik.values.checkpass}
                  error={
                    formik.touched.checkpass && Boolean(formik.errors.checkpass)
                  }
                  helperText={
                    formik.touched.checkpass && formik.errors.checkpass
                  }
                />
              </div>
              <div className="birth-student">
                <DateOfBirthDatePicker
                  name="dateOfBirth"
                  label="Date de naissance"
                />
                <StudentSelect name="student" />
              </div>
              <Alert className="error-alert" variant="filled" severity="error">
                Utilisateur déja inscrit
              </Alert>
              <Button
                fullWidth
                sx={{ fontWeight: 700 }}
                variant="contained"
                type="submit"
              >
                S&apos;INSCRIRE
              </Button>
            </Box>
          </form>
          <div className="new-client">
            <p>Déja un compte ?</p>
            <Link to="/connexion">
              <Button variant="contained" sx={{ fontWeight: '700' }}>
                SE CONNECTER
              </Button>
            </Link>
          </div>
          <FooterMobile />
        </>
      )}
    </Formik>
  );
}

export default SignUpPage;
