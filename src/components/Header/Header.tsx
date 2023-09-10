import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import MobileMenu from './MobileMenu/MobileMenu';
import MobileMyAccountMenu from './MobileMyAccountMenu/MobileMyAccountMenu';

import Logo from '../../assets/cropped-Logo-Katia-lemaire-sophrologie2-255x103.png';
import './style.scss';

function HeaderMobile() {
  return (
    <header className="header">
      <Link to="/test">
        <img
          className="header__logo"
          src={Logo}
          alt="logo Katia Lemaire Sophrologue"
        />
      </Link>
      <div className="header__buttons-container">
        <Link to="/connexion">
          <Button
            variant="contained"
            sx={{ fontSize: '0.7rem', fontWeight: '700' }}
          >
            Prendre RDV
          </Button>
        </Link>
        <div className="header__buttons">
          <MobileMyAccountMenu />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default HeaderMobile;
