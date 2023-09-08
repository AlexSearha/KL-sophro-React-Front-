import { Outlet } from 'react-router-dom';
import FooterMobile from '../Footer/Footer';
import HeaderMobile from '../Header/Header';
import './style.scss';

function HomeLayout() {
  return (
    <>
      <HeaderMobile />
      <Outlet />
      <FooterMobile />
    </>
  );
}

export default HomeLayout;
