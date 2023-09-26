// REACT
import { Outlet } from 'react-router';
// LAYOUTS
import BackOfficeHeader from './BackOfficeHeader/BackOfficeHeader';
// CSS
import './style.scss';

function BackOfficeLayout() {
  return (
    <div className="backoffice-layout">
      <BackOfficeHeader />
      <Outlet />
    </div>
  );
}

export default BackOfficeLayout;
