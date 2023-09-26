// REACT
import * as React from 'react';
import { useNavigate } from 'react-router';
// MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// COMPONENT
import { AlertError } from '../../../../../../components/Layouts/Alert/AlertBox';
// API
import { deleteClientAccount } from '../../../../../../api/api';
// STORE
import { useUserInformations } from '../../../../../../store/store';
// CSS
import './style.scss';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalDeleteAccount() {
  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userId = useUserInformations((state) => state.userInfos.id);

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      if (userId) {
        await deleteClientAccount(userId);
        // navigate('/');
      }
    } catch (error: any) {
      if (error.response.status === 404) {
        setErrorMessage(
          `Quelque chose s'est mal passé pendant la suppression de votre compte`
        );
      }
    }
  };
  return (
    <div>
      <Button
        sx={{ textTransform: 'capitalize', fontWeight: 700 }}
        onClick={handleOpen}
      >
        Supprimer mon compte
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-account-modal"
        aria-describedby="modal-delete-account"
      >
        <Box sx={style}>
          <div className="delete-account-modal">
            <Typography variant="h6" component="h2">
              Cette action supprimera votre compte ainsi que tous vos
              rendez-vous passés et futurs
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Etes vous certain de vouloir supprimer votre compte ?
            </Typography>
            <div className="delete-account-modal__confirmation">
              <Button variant="outlined" onClick={handleClick}>
                Oui
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Non
              </Button>
              {errorMessage ? <AlertError message={errorMessage} /> : null}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
