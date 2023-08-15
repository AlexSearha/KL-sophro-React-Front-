import './style.scss';
import Logo from '../../assets/cropped-Logo-Katia-lemaire-sophrologie2-255x103.png';
import MobileMenu from './MobileMenu/MobileMenu';

function HeaderMobile() {
  return (
    <header className="header">
      <img src={Logo} alt="logo Katia Lemaire Sophrologue" />
      <MobileMenu />
    </header>
  );
}

export default HeaderMobile;
