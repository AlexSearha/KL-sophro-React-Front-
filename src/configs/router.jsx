// REACT ROUTER
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// LAYOUTS
import HomeLayout from '../components/Layouts/Home/HomeLayout';
import MyAccountLayout from '../components/Layouts/MyAccount/MyAccountLayout';
// OUTLETS
import Home from '../pages/Home/Home';
import LoginPage from '../pages/Login/Login';
import SignUpPage from '../pages/SignUp/SignUp';
import Test2 from '../pages/Test/Test2';
import MyAccountContent from '../pages/MyAccount/Outlets/MyAccountContent/MyAccountContent';
import MyAccountTakeAppointment from '../pages/MyAccount/Outlets/MyAccountTakeAppointment/MyAccountTakeAppointment';
import MyAccountSettings from '../pages/MyAccount/MyAccountSettings/MyAccountSettings';
import Contact from '../pages/Contact/Contact';

function RouterDom() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="connexion" element={<LoginPage />} />
          <Route path="inscription" element={<SignUpPage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/mon-compte" element={<MyAccountLayout />}>
          <Route index element={<MyAccountContent />} />
          <Route path="prendre-rdv" element={<MyAccountTakeAppointment />} />
          <Route path="parametres" element={<MyAccountSettings />} />
        </Route>
        <Route path="/back-office" element={<LoginPage />}>
          <Route index element={<Test2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterDom;
