// REACT
import { useState } from 'react';
import { Link } from 'react-router-dom';
// MUI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// STORE
import { useUserInformations } from '../../../../../store/store';
// API
import { sendEmailResetPassword } from '../../../../../api/api';
// CSS
import './style.scss';
import {
  AlertError,
  AlertSuccess,
} from '../../../../../components/Layouts/Alert/AlertBox';
import ModalDeleteAccount from './ModalDeleteAccount/ModalDeleteAccount';

interface CheckDataProps {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
  clientId: number | null;
}

function MyAccountSettingsSecurity() {
  const [successMessage, setSuccessMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const clientId = useUserInformations((state) => state.userInfos.id);
  const [checkData, setCheckData] = useState<CheckDataProps>({
    clientId,
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const result = await sendEmailResetPassword(checkData);
      if (result) {
        setSuccessMessage(true);
      }
    } catch (error: any) {
      if (error.response.status === 401) {
        setErrorMessage(true);
      }
    }
  };

  const handleFocus = () => {
    setErrorMessage(false);
    setSuccessMessage(false);
  };
  return (
    <div className="password-settings">
      <h5>Modification du mot de passe</h5>
      <form className="password-settings__form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          type="password"
          label="Ancien mot de passe"
          name="oldPassword"
          inputProps={{ minLength: 8 }}
          onFocus={handleFocus}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCheckData((data) => ({
              ...data,
              oldPassword: event.target.value,
            }));
          }}
        />
        <TextField
          fullWidth
          type="password"
          label="Nouveau mot de passe"
          name="newPassword"
          inputProps={{ minLength: 8 }}
          onFocus={handleFocus}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCheckData((data) => ({
              ...data,
              newPassword: event.target.value,
            }));
          }}
        />
        <TextField
          fullWidth
          type="password"
          label="Confirmation nouveau mot de passe"
          name="confirmNewPassword"
          inputProps={{ minLength: 8 }}
          onFocus={handleFocus}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCheckData((data) => ({
              ...data,
              confirmNewPassword: event.target.value,
            }));
          }}
        />
        <Button
          sx={{ textTransform: 'capitalize', fontWeight: 700 }}
          variant="contained"
          type="submit"
        >
          Modifier
        </Button>
        {successMessage ? (
          <AlertSuccess message="Mot de passe mise à jour" />
        ) : null}
        {errorMessage ? (
          <AlertError message="Ancien mot de passe incorrect" />
        ) : null}
      </form>
      <ModalDeleteAccount />
    </div>
  );
}

export default MyAccountSettingsSecurity;
