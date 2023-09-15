// STORE
import { useUser } from '../../../../store/store';
// COMPONENTS
import AppointmentForm from '../AppointmentEvent/AppointmentForm/AppointmentForm';

// CSS
import './style.scss';

function MyAccountTakeAppointment() {
  const [userAppointments] = useUser((state) => [state.appointments]);

  const getAppointmentPatch = () => {
    const result: string[][] = [];
    userAppointments?.map((appointment) => {
      const date = appointment.date.split('T')[0];
      const hour = appointment.date.split('T')[1].split('.')[0];
      if (date && hour) {
        result.push([date, hour]);
      }
      return null;
    });
    return result;
  };
  return (
    <div className="take-appointment">
      <h2>
        Prenez <span>votre rendez-vous</span>
      </h2>
      <div className="take-appointment__form-container">
        <AppointmentForm appointmentsDates={getAppointmentPatch()} />
      </div>
    </div>
  );
}

export default MyAccountTakeAppointment;
