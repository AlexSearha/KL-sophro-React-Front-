// COMPONENTS
import DynamicCalendar from './DynamicCalendar/DynamicCalendar';
// STORE
import { useDoctor } from '../../../../store/store';
// CSS
import './style.scss';

function NextAppointments() {
  const appointmentOfTheDay = useDoctor((state) => state.appointmentsOfTheDay);

  const appointmentSelected = () => {
    return appointmentOfTheDay?.map((appointment) => {
      const [year, month, day] = appointment.date.split('T')[0].split('-');
      const [hour, minutes] = appointment.date.split('T')[1].split(':');
      return (
        <div
          key={appointment.id}
          className="appointments-of-the-day-list__card"
        >
          <div className="appointments-of-the-day-list__card-date">
            <h3>{day}</h3>
            <div>
              <p>{`${parseInt(month, 10)
                .toString()
                .padStart(2, '0')} / ${year}`}</p>
            </div>
          </div>
          <div className="appointments-of-the-day-list__card-hour">
            <p>{`${parseInt(hour, 10) + 2}h${minutes} à ${
              parseInt(hour, 10) + 3
            }h${minutes}`}</p>
          </div>
          <div className="appointments-of-the-day-list__card-client">
            <span>Client</span>
            <p>{`${appointment.client.firstname} ${appointment.client.lastname}`}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="appointment-of-the-day">
      <h4 className="calendar-title">Calendrier</h4>
      <DynamicCalendar />
      <div className="appointments-of-the-day-list">
        <h4>Liste des rendez-vous</h4>
        {appointmentOfTheDay && appointmentOfTheDay.length > 0 ? (
          appointmentSelected()
        ) : (
          <span>Pas de rendez-vous</span>
        )}
      </div>
    </div>
  );
}

export default NextAppointments;
