import AppointmentEvent from './AppointmentEvent/AppointmentEvent';
import './style.scss';

function AccountContent() {
  return (
    <div className="account">
      <div className="account__container">
        <h2>
          Bienvenue <span>Michel Durand</span>
        </h2>
        <div className="account__div">
          <div className="account__div__container">
            <div className="account__div__container-futur-appointments">
              <AppointmentEvent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountContent;
