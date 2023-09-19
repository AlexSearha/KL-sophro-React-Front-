// REACT ROUTER
import { useNavigate } from 'react-router';
// MUI
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import './style.scss';

function MobileMenu() {
  const navigate = useNavigate();
  return (
    <div className="dropdown-menu">
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <>
            <Button variant="text" {...bindTrigger(popupState)}>
              <MenuOutlinedIcon sx={{ color: 'black' }} fontSize="medium" />
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>La Sophrologie</MenuItem>
              <MenuItem onClick={popupState.close}>Tarifs</MenuItem>
              <MenuItem onClick={popupState.close}>Méditations</MenuItem>
              <MenuItem
                onClick={() => {
                  popupState.close;
                  navigate('/contact');
                }}
              >
                Contact
              </MenuItem>
            </Menu>
          </>
        )}
      </PopupState>
    </div>
  );
}

export default MobileMenu;
