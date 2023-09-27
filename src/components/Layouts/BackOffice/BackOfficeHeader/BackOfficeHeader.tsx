// REACT
import { Link, useLocation } from 'react-router-dom';
// MUI
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
// COMPONENTS
import LogoutTooltip from './LogoutTooltip/LogoutTooltip';
// FUNCTIONS
import { isNavLinkSelected } from '../../../../utils/utilsFunctions';
// ASSETS
import logo from '../../../../assets/cropped-Logo-Katia-lemaire-sophrologie2-255x103.png';
// CSS
import './style.scss';

function BackOfficeHeader() {
  const location = useLocation();

  return (
    <header className="header-backoffice">
      <img
        className="header-backoffice__logo"
        src={logo}
        style={{ width: '150px' }}
        alt="logo Katia lemaire sophrologue"
      />
      <div className="header-backoffice__main">
        <nav className="header-backoffice__nav">
          <ul>
            <li
              className={
                isNavLinkSelected(location.pathname, '/back-office')
                  ? 'selected'
                  : ''
              }
            >
              <DashboardOutlinedIcon />
              <Link to="/back-office">Dashboard</Link>
            </li>
            <li
              className={
                isNavLinkSelected(location.pathname, '/back-office/clients')
                  ? 'selected'
                  : ''
              }
            >
              <PortraitOutlinedIcon />
              <Link to="/back-office/clients">Clients</Link>
            </li>
            <li
              className={
                isNavLinkSelected(location.pathname, '/back-office/rendez-vous')
                  ? 'selected'
                  : ''
              }
            >
              <CalendarMonthOutlinedIcon />
              <Link to="/back-office/rendez-vous">Rendez-Vous</Link>
            </li>
            <li
              className={
                isNavLinkSelected(location.pathname, '/back-office/parametres')
                  ? 'selected'
                  : ''
              }
            >
              <SettingsIcon />
              <Link to="/back-office/parametres">Parametres</Link>
            </li>
          </ul>
        </nav>
        <div className="header-backoffice__logout">
          <LogoutTooltip />
        </div>
      </div>
    </header>
  );
}

export default BackOfficeHeader;
