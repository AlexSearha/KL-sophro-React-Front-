import { Outlet } from 'react-router-dom';
import HeaderMobile from '../../components/Layouts/Header/Header';
import MyAccountMenu from './Settings/AccountSettingsMenu';
import FooterMobile from '../../components/Layouts/Footer/Footer';
// CSS
import './style.scss';

function MyAccountLayout() {
  return (
    <>
      <HeaderMobile />
      <MyAccountMenu />
      <Outlet />
      <FooterMobile />
    </>
  );
}

export default MyAccountLayout;
