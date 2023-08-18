import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import './style.scss';

function MobileMenu() {
  return (
    <div className="dropdown-menu">
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <>
            <Button variant="text" {...bindTrigger(popupState)}>
              <MenuOutlinedIcon fontSize="medium" />
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>La Sophrologie</MenuItem>
              <MenuItem onClick={popupState.close}>Tarifs</MenuItem>
              <MenuItem onClick={popupState.close}>Méditations</MenuItem>
              <MenuItem onClick={popupState.close}>Contact</MenuItem>
            </Menu>
          </>
        )}
      </PopupState>
    </div>
  );
}

export default MobileMenu;
