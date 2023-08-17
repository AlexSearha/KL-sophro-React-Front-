import { Link, useTheme } from '@mui/material';
import './style.scss';

function LinksMenu() {
  const theme = useTheme();
  return (
    <div className="links-menu">
      <Link
        color={theme.palette.primary.contrastText}
        underline="hover"
        href="https://google.fr"
      >
        La sophrologie
      </Link>
      <Link
        color={theme.palette.primary.contrastText}
        underline="hover"
        href="https://google.fr"
      >
        Tarifs
      </Link>
      <Link
        color={theme.palette.primary.contrastText}
        underline="hover"
        href="https://google.fr"
      >
        Méditations
      </Link>
      <Link
        color={theme.palette.primary.contrastText}
        underline="hover"
        href="https://google.fr"
      >
        Contact
      </Link>
    </div>
  );
}

export default LinksMenu;
