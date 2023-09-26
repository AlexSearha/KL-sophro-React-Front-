// REACT
import { useNavigate } from 'react-router';
// MUI
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinksMenu from '../../LinksMenu/LinksMenu';
// CSS
import './style.scss';

function FooterMobile() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/mon-compte/prendre-rdv');
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <p className="footer__copyrights">
            &quot;Sophrologue sur Noyal-Muzillac (Périphérie de Vannes),
            j&apos;accompagnement les particuliers et les entreprises en
            présentiel ou distanciel&quot;
          </p>
          <div className="footer__need-appointment">
            <h3>Besoin d&apos;un rendez-vous ?</h3>
            <Button
              onClick={handleClick}
              variant="contained"
              sx={{ width: '45%' }}
            >
              JE PRENDS LE MIEN
            </Button>
          </div>
          <LinksMenu />
        </div>
        <div className="footer__credits">
          <p>
            © KATIA LEMAIRE SOPHROLOGUE - 2023 | Mentions légales - Politique de
            confidentialité - CGV
          </p>
          <div className="footer__credits__socials">
            <Link href="https://www.instagram.com" target="_blank">
              <InstagramIcon className="instagram-icon" />
            </Link>
            <Link href="https://www.youtube.com" target="_blank">
              <YouTubeIcon className="yt-icon" />
            </Link>
            <Link href="https://fr-fr.facebook.com/" target="_blank">
              <FacebookIcon className="fb-icon" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterMobile;
