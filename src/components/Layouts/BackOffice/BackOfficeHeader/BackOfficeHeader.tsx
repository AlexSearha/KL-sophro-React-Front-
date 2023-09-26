// REACT
import { Link } from 'react-router-dom';
// MUI
// ASSETS
import logo from '../../../../assets/cropped-Logo-Katia-lemaire-sophrologie2-255x103.png';
// CSS
import './style.scss';
import LogoutTooltip from './LogoutTooltip/LogoutTooltip';

function BackOfficeHeader() {
  return (
    <header className="header-backoffice">
      <img
        src={logo}
        style={{ width: '100%' }}
        alt="logo Katia lemaire sophrologue"
      />
      <nav className="header-backoffice__nav">
        <ul>
          <li>
            <Link to="/back-office">Dashboard</Link>
          </li>
          <li>
            <Link to="/back-office/clients">Clients</Link>
          </li>
          <li>
            <Link to="/back-office">Rendez-Vous</Link>
          </li>
        </ul>
      </nav>
      <div className="header-backoffice__logout">
        <LogoutTooltip />
      </div>
    </header>
  );
}

export default BackOfficeHeader;
