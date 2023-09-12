// REACT
import { Outlet } from 'react-router-dom';
// OUTLETS
import HeaderMobile from '../Header/Header';
import MyAccountMenu from '../../../pages/MyAccount/Settings/AccountSettingsMenu';
import FooterMobile from '../Footer/Footer';
// STORE
// API
// CSS
import './style.scss';

function MyAccountLayout() {
  return (
    <>
      <HeaderMobile />
      <div className="container">
        <div className="container__main">
          <div className="container__menu bg-white">
            <h3>Mon Compte</h3>
            <MyAccountMenu />
          </div>
          <div className="container__inputs bg-white">
            <Outlet />
          </div>
        </div>
      </div>
      <FooterMobile />
    </>
  );
}

export default MyAccountLayout;
