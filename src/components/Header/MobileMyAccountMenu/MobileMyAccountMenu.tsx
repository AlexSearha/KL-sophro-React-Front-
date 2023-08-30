import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import './style.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function MobileMyAccountMenu() {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  return (
    <div className="dropdown-account">
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <>
            <Button variant="text" {...bindTrigger(popupState)}>
              <AccountCircleOutlinedIcon
                sx={{ color: 'black' }}
                fontSize="medium"
              />
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
                  <MenuItem onClick={popupState.close}>
                    <FolderSharedIcon sx={{ marginRight: 1 }} /> Mon compte
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setIsConnected(false);
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
