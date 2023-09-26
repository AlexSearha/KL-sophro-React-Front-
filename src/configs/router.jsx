// REACT ROUTER
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// LAYOUTS
import HomeLayout from '../components/Layouts/Home/HomeLayout';
import MyAccountLayout from '../components/Layouts/MyAccount/MyAccountLayout';
import BackOfficeLayout from '../components/Layouts/BackOffice/BackOfficeLayout';
// OUTLETS
import Home from '../pages/Home/Home';
import LoginPage from '../pages/Login/Login';
import SignUpPage from '../pages/SignUp/SignUp';
import Test2 from '../pages/Test/Test2';
import MyAccountContent from '../pages/MyAccount/Outlets/MyAccountContent/MyAccountContent';
import MyAccountTakeAppointment from '../pages/MyAccount/Outlets/MyAccountTakeAppointment/MyAccountTakeAppointment';
import Contact from '../pages/Contact/Contact';
import MyAccountSettingsLayout from '../components/Layouts/MyAccount/MyAccountSettingsLayout/MyAccountSettings';
import MyAccountSettingsRouter from '../pages/MyAccount/Outlets/MyAccountSettings/MyAccountSeetingsRouter';
import PersonalInfos from '../pages/MyAccount/Outlets/MyAccountSettings/PersonnalInfos/PersonnalInfos';
import MyAccountSettingsSecurity from '../pages/MyAccount/Outlets/MyAccountSettings/Security/MyAccountSettingsSecurity';
import ForgottenPassword from '../pages/ForgottenPassword/ForgottenPassword';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import BackOfficeHome from '../pages/BackOffice/BackOfficeHome/BackOfficeHome';

function RouterDom() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="connexion" element={<LoginPage />} />
          <Route path="inscription" element={<SignUpPage />} />
          <Route path="mdp-oublie" element={<ForgottenPassword />} />
          <Route path="reinit-mdp/:token" element={<ResetPassword />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/mon-compte" element={<MyAccountLayout />}>
          <Route index element={<MyAccountContent />} />
          <Route path="prendre-rdv" element={<MyAccountTakeAppointment />} />
          <Route path="parametres" element={<MyAccountSettingsLayout />}>
            <Route index element={<MyAccountSettingsRouter />} />
            <Route
              path="informations-personnelles"
              element={<PersonalInfos />}
            />
            <Route path="securite" element={<MyAccountSettingsSecurity />} />
            <Route path="notifications" element={<MyAccountSettingsRouter />} />
          </Route>
        </Route>
        <Route path="/back-office" element={<BackOfficeLayout />}>
          <Route index element={<BackOfficeHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterDom;
