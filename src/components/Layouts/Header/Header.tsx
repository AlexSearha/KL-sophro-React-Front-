// REACT
import { Link } from 'react-router-dom';
// MUI
import Button from '@mui/material/Button';
// LAYOUTS
import MobileMenu from './MobileMenu/MobileMenu';
import MobileMyAccountMenu from './MobileMyAccountMenu/MobileMyAccountMenu';
// STORE
import { useUser } from '../../../store/store';
// ASSETS
import Logo from '../../../assets/cropped-Logo-Katia-lemaire-sophrologie2-255x103.png';
// CSS
import './style.scss';

function HeaderMobile() {
  const [isConnected] = useUser((state) => [state.isConnected]);
  const linkIfConnected = isConnected
    ? '/mon-compte/prendre-rdv'
    : '/connexion';
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={Logo}
          alt="logo Katia Lemaire Sophrologue"
        />
      </Link>
      <div className="header__buttons-container">
        <Link to={linkIfConnected}>
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
