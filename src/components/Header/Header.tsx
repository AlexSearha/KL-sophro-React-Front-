import { Button } from '@mui/material';
import Logo from '../../assets/cropped-Logo-Katia-lemaire-sophrologie2-255x103.png';
import MobileMenu from './MobileMenu/MobileMenu';
import MobileMyAccountMenu from './MobileMyAccountMenu/MobileMyAccountMenu';
import './style.scss';

function HeaderMobile() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={Logo}
        alt="logo Katia Lemaire Sophrologue"
      />
      <div className="header__buttons-container">
        <div className="header__buttons">
          <MobileMyAccountMenu />
          <MobileMenu />
        </div>
        <Button
          variant="contained"
          href="https://www.google.com"
          sx={{ fontSize: '0.7rem', fontWeight: '700' }}
        >
          Prendre RDV
        </Button>
      </div>
    </header>
  );
}

export default HeaderMobile;
