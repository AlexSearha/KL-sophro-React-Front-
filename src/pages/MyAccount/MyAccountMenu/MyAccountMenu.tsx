import { useEffect } from 'react';
// ROUTER
import { useNavigate } from 'react-router';
// MUI
import { Button, ThemeProvider, createTheme } from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import TodayIcon from '@mui/icons-material/Today';
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
              sx={{ textTransform: 'capitalize' }}
              startIcon={<TodayIcon style={{ fontSize: 30 }} />}
              className="account-sidemenu"
              variant="text"
              onClick={() => navigate('/mon-compte')}
            >
              rendez-vous
            </Button>
          </li>
          <li>
            <Button
              sx={{ textTransform: 'capitalize' }}
              startIcon={<EditCalendarIcon style={{ fontSize: 30 }} />}
              className="account-sidemenu"
              variant="text"
              onClick={() => navigate('/mon-compte/prendre-rdv')}
            >
              Prendre rdv
            </Button>
          </li>
          <li>
            <Button
              sx={{ textTransform: 'capitalize' }}
              startIcon={<ManageAccountsIcon style={{ fontSize: 30 }} />}
              className="account-sidemenu"
              variant="text"
              onClick={() => navigate('/mon-compte/parametres')}
            >
              Paramètres
            </Button>
          </li>
          <li>
            <Button
              sx={{ textTransform: 'capitalize' }}
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
