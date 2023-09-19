import { Outlet } from 'react-router';
import './style.scss';

function MyAccountSettingsLayout() {
  return (
    <div className="myaccount-settings">
      <h2>Paramètres</h2>
      <div className="myaccount-settings__content">
        <div className="myaccount-settings__content-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MyAccountSettingsLayout;
