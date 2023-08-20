import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

import './style.scss';

interface FloatingButtonUpProps {
  scroll: boolean;
}

function FloatingButtonUp({ scroll }: FloatingButtonUpProps) {
  const handleClick = () => {
    window.scroll(0, 0);
  };

  const boxClass = `floating-button-up ${scroll ? 'visible' : 'disable'}`;

  return (
    <Box className={boxClass}>
      <Fab
        onClick={handleClick}
        color="primary"
        sx={{ width: '40px', height: '40px' }}
        aria-label="up"
      >
        <KeyboardArrowUpOutlinedIcon />
      </Fab>
    </Box>
  );
}

export default FloatingButtonUp;
