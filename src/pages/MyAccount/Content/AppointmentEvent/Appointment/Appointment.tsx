import { Link } from 'react-router-dom';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import './style.scss';
import { Button } from '@mui/material';

interface BookStateProp {
  bookState: string;
  state: string;
  report?: string | null;
}

function Appointment({ bookState, state, report }: BookStateProp) {
  const appointmentState = `appointment__part-two__state ${state}`;

  return (
    <div className="appointment">
      <div className="appointment__main">
        <div className="appointment__part-one">
          <div className="appointment__part-one__date">
            <div className="appointment__part-one__date-day">29</div>
            <div className="appointment__part-one__date-month">
              Sept
              <br />
              2023
            </div>
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
            {report ? (
              <Button
                sx={{ fontSize: 15, textTransform: 'capitalize' }}
                variant="contained"
                endIcon={<FileDownloadIcon sx={{ color: 'white' }} />}
                onClick={() => console.log('telechargement du PDF')}
              >
                {report}
              </Button>
            ) : null}
          </div>
        </div>
        <div className="appointment__part-two">
          <div>
            <div className={appointmentState}>{bookState}</div>
            {state === 'cancelled' || state === 'done' ? null : (
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
