import { useEffect } from 'react';
// ROUTER
import { useNavigate } from 'react-router';
// MUI
import {
  Button,
  Stack,
  ThemeProvider,
  createTheme,
  useTheme,
} from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import LogoutIcon from '@mui/icons-material/Logout';
// API
import { apiBackEnd } from '../../../api/api';
// STORE
import { useUser } from '../../../store/store';
// CSS
import './style.scss';

function MyAccountMenu() {
  const [isConnected, UpdateIsConnected] = useUser((state) => [
    state.isConnected,
    state.UpdateIsConnected,
  ]);
  const navigate = useNavigate();

  function handleClickLogout() {
    apiBackEnd.defaults.headers.common.Authorization = null;
    apiBackEnd.get('/logout');
    UpdateIsConnected(false);
    navigate('/');
  }

  const accountTheme = createTheme({
    palette: {
      primary: {
        main: '#2e2e2e;', // Gris noir texte
        light: '#757ce8', // bleu
        dark: '#', // bleu foncé
        contrastText: '#fff', // blanc
      },
    },
  });

  useEffect(() => {
    if (!isConnected) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);
  return (
    <ThemeProvider theme={accountTheme}>
      <nav className="setting-menu">
        <ul className="setting-menu__ul">
          <li>
            <Button
              startIcon={<EditCalendarIcon style={{ fontSize: 30 }} />}
              className="account-sidemenu"
              variant="text"
              onClick={() => navigate('/mon-compte')}
            >
              rendez-vous
            </Button>
          </li>
          <li>
            <Button
              startIcon={<FolderOpenIcon style={{ fontSize: 30 }} />}
              className="account-sidemenu"
              variant="text"
              onClick={() => navigate('/mon-compte/seances')}
            >
              Seances
            </Button>
          </li>
          <li>
            <Button
              startIcon={<ManageAccountsIcon style={{ fontSize: 30 }} />}
              className="account-sidemenu"
              variant="text"
              onClick={() => navigate('/mon-compte/parametres')}
            >
              Informations
            </Button>
          </li>
          <li>
            <Button
              startIcon={<LogoutIcon style={{ fontSize: 30 }} />}
              className="account-sidemenu"
              variant="text"
              onClick={() => handleClickLogout()}
            >
              Se deconnecter
            </Button>
          </li>
        </ul>
      </nav>
    </ThemeProvider>
  );
}

export default MyAccountMenu;
