// STORE
import { useUserInformations } from '../../../store/store';
// COMPONENT
import AppointmentEvent from './AppointmentEvent/AppointmentEvent';
// CSS
import './style.scss';

function AccountContent() {
  const [userInfos, UpdateUserInfos] = useUserInformations((state) => [
    state.userInfos,
    state.UpdateUserInfos,
  ]);

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

export default AccountContent;
