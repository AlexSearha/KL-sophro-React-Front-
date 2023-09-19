// REACT
import { useState } from 'react';
// MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// API
import { fetchDeleteAppointment } from '../../../../../../api/api';
import { useUser, useUserInformations } from '../../../../../../store/store';
import TrashTooltip from '../../../../../../components/TrashTooltip/TrashTooltip';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CancelAppointmentModal({
  getDate,
  getHour,
  appointmentId,
}: {
  getDate: string[];
  getHour: string[];
  appointmentId: number;
}) {
  const UpdateIsAppointmentCancelled = useUser(
    (state) => state.UpdateIsAppointmentUpdated
  );
  const userInfos = useUserInformations((state) => state.userInfos);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = {
    user: userInfos,
    appointmentConcerned: {
      year: parseInt(getDate[0], 10),
      month: parseInt(getDate[1], 10),
      day: parseInt(getDate[2], 10),
      hour: parseInt(getHour[0], 10) + 2,
    },
  };

  const handleCancelAppointment = async () => {
    try {
      await fetchDeleteAppointment(appointmentId, data);
      handleClose();
      UpdateIsAppointmentCancelled();
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <div>
      <TrashTooltip eventListener={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="wishToCancel">
              <p>
                {`Confirmez-vous l'annulation du rendez-vous du ${getDate[2]}/${
                  getDate[1]
                }/${getDate[0]} à ${parseInt(getHour[0], 10) + 2}H00 ?`}
              </p>
              <div className="wishToCancel__buttons">
                <Button variant="contained" onClick={handleCancelAppointment}>
                  Oui
                </Button>
                <Button variant="outlined" onClick={handleClose}>
                  Non
                </Button>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
