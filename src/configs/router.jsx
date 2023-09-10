// REACT ROUTER
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// LAYOUTS
import HomeLayout from '../components/Layouts/Home/HomeLayout';
import MyAccountLayout from '../components/Layouts/MyAccount/MyAccountLayout';
// OUTLETS
import Home from '../pages/Home/Home';
import LoginPage from '../pages/Login/Login';
import SignUpPage from '../pages/SignUp/SignUp';
import AccountContent from '../pages/MyAccount/Content/AccountContent';
import Test2 from '../pages/Test/Test2';

function RouterDom() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="connexion" element={<LoginPage />} />
          <Route path="inscription" element={<SignUpPage />} />
        </Route>
        <Route path="/mon-compte" element={<MyAccountLayout />}>
          <Route index element={<AccountContent />} />
          <Route path="test2" element={<Test2 />} />
        </Route>
        <Route path="/back-office" element={<LoginPage />}>
          <Route index element={<Test2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterDom;
