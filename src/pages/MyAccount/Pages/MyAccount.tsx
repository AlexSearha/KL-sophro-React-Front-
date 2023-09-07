import { useEffect } from 'react';
import { useNavigate } from 'react-router';
// STORE
import useUser from '../../../store/store';
// COMPONENTS
import FooterMobile from '../../../components/Footer/Footer';
import HeaderMobile from '../../../components/Layouts/Header/Header';
import AccountContent from '../Content/AccountContent';
import AccountSettingsMenu from '../Settings/AccountSettingsMenu';
// CSS
import './style.scss';

function MyAcccount() {
  const [isConnected, UpdateIsConnected] = useUser((state) => [
    state.isConnected,
    state.UpdateIsConnected,
  ]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isConnected) {
  //     navigate('/connexion');
  //   }
  // }, [isConnected]);
  return (
    <>
      {/* <HeaderMobile />
      <div className="container">
        <div className="container__main">
          <div className="container__menu bg-white">
            <h3>Votre compte</h3>
            <AccountSettingsMenu />
          </div>
          <div className="container__inputs bg-white">
            <AccountContent />
          </div>
        </div>
      </div>
      <FooterMobile /> */}
      <h2>TEST</h2>
    </>
  );
}

export default MyAcccount;
