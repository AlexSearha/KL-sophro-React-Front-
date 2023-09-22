// MUI
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

interface TrashTooltipProps {
  eventListener: () => void;
}

export default function TrashTooltip({ eventListener }: TrashTooltipProps) {
  return (
    <Tooltip onClick={eventListener} title="Annuler le rendez-vous">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}
