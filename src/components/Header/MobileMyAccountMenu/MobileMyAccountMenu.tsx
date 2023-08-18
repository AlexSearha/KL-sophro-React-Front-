import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import './style.scss';
import { useState } from 'react';

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
                <>
                  {' '}
                  <MenuItem onClick={popupState.close}>Se connecter</MenuItem>
                  <MenuItem onClick={popupState.close}>
                    Créer un compte
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={popupState.close}>Mon compte</MenuItem>
                  <MenuItem
                    onClick={() => {
                      setIsConnected(false);
                      popupState.close;
                    }}
                  >
                    Se deconnecter
                  </MenuItem>
                </>
              )}
            </Menu>
          </>
        )}
      </PopupState>
    </div>
  );
}

export default MobileMyAccountMenu;
