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
// STORE
import useUser from '../../../store/store';
// CSS
import './style.scss';

function MyAccountMenu() {
  const [isConnected, UpdateIsConnected] = useUser((state) => [
    state.isConnected,
    state.UpdateIsConnected,
  ]);

  const handleClickLogout = () => {
    UpdateIsConnected(false);
    console.log(isConnected);
  };

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

  const navigate = useNavigate();
  return (
    <ThemeProvider theme={accountTheme}>
      <nav className="setting-menu">
        <ul className="setting-menu__ul">
          <li>
            <Button
              startIcon={<FolderOpenIcon style={{ fontSize: 30 }} />}
              className="account-sidemenu"
              variant="text"
            >
              Dossier
            </Button>
          </li>
          <li>
            <Button
              startIcon={<ManageAccountsIcon style={{ fontSize: 30 }} />}
              className="account-sidemenu"
              variant="text"
            >
              Informations
            </Button>
          </li>
          <li>
            <Button
              startIcon={<EditCalendarIcon style={{ fontSize: 30 }} />}
              className="account-sidemenu"
              variant="text"
              onClick={() => navigate('/test')}
            >
              rendez-vous
            </Button>
          </li>
          <li>
            <Button
              startIcon={<LogoutIcon style={{ fontSize: 30 }} />}
              className="account-sidemenu"
              variant="text"
              onClick={handleClickLogout}
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
