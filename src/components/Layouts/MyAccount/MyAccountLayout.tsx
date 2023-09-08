import { Outlet } from 'react-router-dom';
import HeaderMobile from '../Header/Header';
import MyAccountMenu from '../../../pages/MyAccount/Settings/AccountSettingsMenu';
import FooterMobile from '../Footer/Footer';
// CSS
import './style.scss';
import AccountContent from '../../../pages/MyAccount/Content/AccountContent';

function MyAccountLayout() {
  return (
    <>
      <HeaderMobile />
      <div className="container">
        <div className="container__main">
          <div className="container__menu bg-white">
            <h3>Votre compte</h3>
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
