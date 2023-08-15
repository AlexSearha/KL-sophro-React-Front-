import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';

function MobileMenu() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button variant="contained" {...bindTrigger(popupState)}>
            <HorizontalSplitIcon />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Mon compte</MenuItem>
            <MenuItem onClick={popupState.close}>Prendre Rendez-vous</MenuItem>
            <MenuItem onClick={popupState.close}>Se déconnecter</MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
}

export default MobileMenu;
