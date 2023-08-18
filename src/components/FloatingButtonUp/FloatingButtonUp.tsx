import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

function FloatingButtonUp() {
  const handleClick = () => {
    window.scroll(0, 0);
  };
  return (
    <Box sx={{ position: 'fixed', bottom: 16, right: 16 }}>
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
