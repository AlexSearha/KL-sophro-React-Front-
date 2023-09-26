// REACT
import { useEffect, useId, useState } from 'react';
// MUI
import { Button, TextField } from '@mui/material';
// EMAIL VALIDATOR
import { validate } from 'email-validator';
// COMPONENT
import {
  AlertError,
  AlertInfo,
  AlertSuccess,
} from '../../components/Layouts/Alert/AlertBox';
// API
import { sendingTokenToResetPassword } from '../../api/api';

function ForgottenPassword() {
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorSent, setErrorSent] = useState<boolean>(false);
  const [helperMessage, setHelperMessage] = useState<string>('');
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const result = await sendingTokenToResetPassword({
        email: value,
      });
      if (result) {
        setEmailSent(true);
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const handlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleFocus = () => {
    setErrorMessage('');
    setSuccessMessage('');
    setErrorSent(false);
  };

  useEffect(() => {
    if (!validate(value) && value.includes('@')) {
      setHelperMessage('Format de votre email incorrect');
      setErrorSent(true);
    } else {
      setHelperMessage('');
      setErrorSent(false);
    }
  }, [value]);

  return emailSent ? (
    <AlertInfo message="Un email de reinitialisation du mot de passe vient de vous etre envoyé à l'adresse indiquée" />
  ) : (
    <form onSubmit={handleSubmit}>
      <TextField
        type="email"
        label="email"
        name="email"
        value={value}
        onChange={handlChange}
        onFocus={handleFocus}
        helperText={helperMessage}
        error={errorSent}
      />
      <Button
        sx={{ textTransform: 'capitalize', fontWeight: 700 }}
        variant="contained"
        type="submit"
      >
        Envoyer
      </Button>
      {successMessage ? <AlertSuccess message={successMessage} /> : null}
      {errorMessage ? <AlertError message={errorMessage} /> : null}
    </form>
  );
}

export default ForgottenPassword;
