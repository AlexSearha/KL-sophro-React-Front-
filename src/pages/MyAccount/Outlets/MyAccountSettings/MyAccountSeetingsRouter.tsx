// MUI
// MUI
import SettingsIcon from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';
// COMPONENT
import LinkCard from './LinkCard/LinkCard';
// CSS
import './style.scss';

function MyAccountSettingsRouter() {
  return (
    <div className="linkcard-container">
      <LinkCard
        description="Ajoutez ou modifiez vos coordonées et informations de contact"
        title="Informations Personnelles"
        link="/mon-compte/parametres/informations-personnelles"
        icon={SettingsIcon}
      />
      <LinkCard
        description="Mettez à jour votre mot de passe / Supprimez votre compte"
        title="Sécurité"
        link="/mon-compte/parametres/securite"
        icon={SecurityIcon}
      />
    </div>
  );
}

export default MyAccountSettingsRouter;
