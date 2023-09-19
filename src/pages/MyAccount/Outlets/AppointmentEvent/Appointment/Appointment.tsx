// MUI
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button } from '@mui/material';
// TYPES
import { AppointmentProps } from '../../../../../@types';
// CSS
import './style.scss';
import CancelAppointmentModal from './Modal/CancelAppointmentModal';

function Appointment({ item }: { item: AppointmentProps }) {
  const { id, status, exercices, date, payment_value: paimentValue } = item;
  const appointmentState = `appointment__part-two__state ${status}`;
  const getDate = date.split('T')[0].split('-');
  const getHour = date.split('T')[1].split(':');

  const changeTagStatusClassname = () => {
    if (status === 'booked') {
      return 'Reservé';
      // eslint-disable-next-line no-else-return
    } else if (status === 'done') {
      return 'Terminé';
    } else if (status === 'cancelled') {
      return 'Annulé';
    }
    return null;
  };

  return (
    <div className="appointment">
      <div className="appointment__main">
        <div className="appointment__part-one">
          <div className="appointment__part-one__date">
            <div className="appointment__part-one__date-day">{getDate[2]}</div>
            <div className="appointment__part-one__date-month">
              {`${getDate[1]} ${getDate[0]}`}
            </div>
          </div>
          <div className="appointment__part-one__hours">
            <div className="appointment__part-one__hours-title">
              Rendez-vous
            </div>
            <div className="appointment__part-one__hours-hour">
              {`${parseInt(getHour[0], 10) + 2}h00 à ${
                parseInt(getHour[0], 10) + 3
              }h00`}
            </div>
          </div>
          <div className="appointment__part-one__raport">
            {exercices ? (
              <Button
                sx={{ fontSize: 15, textTransform: 'capitalize' }}
                variant="contained"
                endIcon={<FileDownloadIcon sx={{ color: 'white' }} />}
                onClick={() => console.log('telechargement du PDF')}
              >
                Rapport
              </Button>
            ) : null}
          </div>
        </div>
        <div className="appointment__part-two">
          <div>
            <div className={appointmentState}>{changeTagStatusClassname()}</div>
            {status === 'cancelled' || status === 'done' ? null : (
              <CancelAppointmentModal
                appointmentId={id}
                getDate={getDate}
                getHour={getHour}
              />
            )}
          </div>
          <div className="appointment__part-two__price">{paimentValue} €</div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
