import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router';
import { fetchLogout } from '../../../../../api/api';

export default function LogoutTooltip() {
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const result = await fetchLogout();
      if (result) {
        navigate('/');
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <Tooltip title="Deconnexion">
      <IconButton onClick={handleClick}>
        <LogoutIcon fontSize="large" />
      </IconButton>
    </Tooltip>
  );
}
