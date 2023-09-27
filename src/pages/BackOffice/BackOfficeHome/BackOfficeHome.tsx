import NextAppointments from './NextAppointments/NextAppointments';
import './style.scss';

function BackOfficeHome() {
  return (
    <div className="backoffice-home">
      <div className="backoffice-home__next-appointments">
        <NextAppointments />
      </div>
      <div className="backoffice-search-client">Search Client</div>
      <div className="backoffice-home__clients">Liste des clients</div>
    </div>
  );
}

export default BackOfficeHome;
