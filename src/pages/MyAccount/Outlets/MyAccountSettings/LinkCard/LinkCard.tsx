// REACT
import { useNavigate } from 'react-router-dom';
// MUI
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Button, SvgIconTypeMap } from '@mui/material';
// CSS
import './style.scss';

interface LinkCardProps {
  link: string;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
}

function LinkCard({
  title,
  description,
  link,
  icon: IconComponent,
}: LinkCardProps) {
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate(link);
  };
  return (
    <div className="linkcard">
      <div className="linkcard-title">
        <IconComponent style={{ fontSize: 32 }} />
        <p>{title}</p>
      </div>
      <div className="linkcard-description">
        <p>{description}</p>
        <Button
          size="small"
          sx={{ textTransform: 'capitalize', fontWeight: 700 }}
          variant="outlined"
          onClick={handleClickNavigate}
        >
          Modifier
        </Button>
      </div>
    </div>
  );
}

export default LinkCard;
