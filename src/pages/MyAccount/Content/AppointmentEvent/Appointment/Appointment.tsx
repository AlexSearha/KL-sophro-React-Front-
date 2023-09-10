// REACT
import { Link } from 'react-router-dom';
// MUI
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button } from '@mui/material';
// TYPES
import { AppointmentProps } from '../../../../../@types';
// CSS
import './style.scss';

function Appointment({ item }: { item: AppointmentProps }) {
  const { id, status, exercices } = item;
  const appointmentState = `appointment__part-two__state ${status}`;

  return (
    <div className="appointment">
      <div className="appointment__main">
        <div className="appointment__part-one">
          <div className="appointment__part-one__date">
            <div className="appointment__part-one__date-day">{id}</div>
            <div className="appointment__part-one__date-month">Sept 2023</div>
          </div>
          <div className="appointment__part-one__hours">
            <div className="appointment__part-one__hours-title">
              Rendez-vous
            </div>
            <div className="appointment__part-one__hours-hour">
              11:00 à 12h00
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
            <div className={appointmentState}>{status}</div>
            {status === 'cancelled' || status === 'done' ? null : (
              <Link className="appointment--modify" to="/">
                modifier
              </Link>
            )}
          </div>
          <div className="appointment__part-two__price">50 €</div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
