// STORE
// COMPONENT
import { useUserInformations } from '../../../../store/store';
import AppointmentEvent from '../AppointmentEvent/AppointmentEvent';
// CSS
import './style.scss';

function MyAccountContent() {
  const [userInfos] = useUserInformations((state) => [state.userInfos]);

  return (
    <div className="account">
      <div className="account__container">
        <h2>
          Bienvenue{' '}
          <span>
            {userInfos.firstname} {userInfos.lastname}
          </span>
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

export default MyAccountContent;
