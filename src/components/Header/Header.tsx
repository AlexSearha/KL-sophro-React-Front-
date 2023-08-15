import './style.scss';
import Logo from '../../assets/cropped-Logo-Katia-lemaire-sophrologie2-255x103.png';
import MobileMenu from './MobileMenu/MobileMenu';
import MobileMyAccountMenu from './MobileMyAccountMenu/MobileMyAccountMenu';

function HeaderMobile() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={Logo}
        alt="logo Katia Lemaire Sophrologue"
      />
      <div className="header__buttons">
        <MobileMyAccountMenu />
        <MobileMenu />
      </div>
    </header>
  );
}

export default HeaderMobile;
