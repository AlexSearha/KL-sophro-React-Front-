// MUI
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SecurityIcon from '@mui/icons-material/Security';
// COMPONENT
import LinkCard from './LinkCard/LinkCard';
// CSS
import './style.scss';

function MyAccountSettingsRouter() {
  return (
    <>
      <LinkCard
        description="Ajoutez ou modifiez vos coordonées et informations de contact"
        title="Informations Personnelles"
        link="/mon-compte/parametres/informations-personnelles"
        icon={SettingsIcon}
      />
      <LinkCard
        description="Mettez à jour votre mot de passe"
        title="Sécurité"
        link="/mon-compte/parametres/securite"
        icon={SecurityIcon}
      />
      <LinkCard
        description="Modifiez vos paramètres de notifications"
        title="Notifications"
        link="/mon-compte/parametres/notifications"
        icon={NotificationsActiveIcon}
      />
    </>
  );
}

export default MyAccountSettingsRouter;