import { Button, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './style.scss';
import LinksMenu from '../LinksMenu/LinksMenu';

function FooterMobile() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>
          &quot;Sophrologue sur Noyal-Muzillac (Périphérie de Vannes),
          j&apos;accompagnement les particuliers et les entreprises en
          présentiel ou distanciel&quot;
        </p>
        <div className="footer__need-appointment">
          <h3>Besoin d&apos;un rendez-vous ?</h3>
          <Button variant="contained">JE PRENDS LE MIEN</Button>
        </div>
      </div>
      <LinksMenu />
      <div className="credits">
        <p>
          © KATIA LEMAIRE SOPHROLOGUE - 2023 | Mentions légales - Politique de
          confidentialité - CGV
        </p>
        <div className="credits__socials">
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
    </footer>
  );
}

export default FooterMobile;
