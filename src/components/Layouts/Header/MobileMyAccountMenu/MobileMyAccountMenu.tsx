import { NavLink, useNavigate } from 'react-router-dom';
// MUI
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// API
import { apiBackEnd } from '../../../../api/api';
// STORE
import { useUser, useUserInformations } from '../../../../store/store';
// CSS
import './style.scss';

function MobileMyAccountMenu() {
  const [isConnected, UpdateIsConnected] = useUser((state) => [
    state.isConnected,
    state.UpdateIsConnected,
  ]);
  const [userInfos, UpdateUserInfos] = useUserInformations((state) => [
    state.userInfos,
    state.UpdateUserInfos,
  ]);

  const navigate = useNavigate();

  async function fetchLoggout() {
    apiBackEnd.defaults.headers.common.Authorization = null;
    await apiBackEnd.get('/logout');
    UpdateUserInfos({ id: null, firstname: '', lastname: '', email: '' });
    UpdateIsConnected(false);
    navigate('/');
  }

  return (
    <div className="dropdown-account">
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <>
            <Button variant="text" {...bindTrigger(popupState)}>
              {isConnected ? (
                <AccountCircleIcon fontSize="medium" sx={{ color: 'green' }} />
              ) : (
                <AccountCircleOutlinedIcon
                  sx={{ color: 'black' }}
                  fontSize="medium"
                />
              )}
            </Button>
            <Menu {...bindMenu(popupState)}>
              {!isConnected ? (
                <div>
                  <NavLink className="link" to="/connexion">
                    <MenuItem onClick={popupState.close}>Se connecter</MenuItem>
                  </NavLink>
                  <NavLink className="link" to="/inscription">
                    <MenuItem onClick={popupState.close}>
                      Créer un compte
                    </MenuItem>
                  </NavLink>
                </div>
              ) : (
                <div>
                  <MenuItem
                    onClick={() => {
                      navigate('/mon-compte');
                      popupState.close;
                    }}
                  >
                    <FolderSharedIcon sx={{ marginRight: 1 }} /> Mon compte
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      fetchLoggout();
                      popupState.close;
                    }}
                  >
                    <ExitToAppIcon sx={{ marginRight: 1 }} />
                    Se deconnecter
                  </MenuItem>
                </div>
              )}
            </Menu>
          </>
        )}
      </PopupState>
    </div>
  );
}

export default MobileMyAccountMenu;
