// REACT
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// MUI
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button } from '@mui/material';
// TYPES
import { AppointmentProps } from '../../../../../@types';
// CSS
import './style.scss';

function Appointment({ item }: { item: AppointmentProps }) {
  const { status, exercices, date, reporting, paiment_value } = item;
  const appointmentState = `appointment__part-two__state ${status}`;
  const getDate = date.split('T')[0].split('-');
  const getHour = date.split('T')[1].split(':');

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
              {`${parseInt(getHour[0], 10)}h00 à ${
                parseInt(getHour[0], 10) + 1
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
            <div className={appointmentState}>{status}</div>
            {status === 'cancelled' || status === 'done' ? null : (
              <Link className="appointment--modify" to="/">
                modifier
              </Link>
            )}
          </div>
          <div className="appointment__part-two__price">{paiment_value} €</div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
