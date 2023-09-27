import { LocalizationProvider, frFR } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './style.scss';
import DynamicCalendar from './DynamicCalendar/DynamicCalendar';

function NextAppointments() {
  return <DynamicCalendar />;
}

export default NextAppointments;
