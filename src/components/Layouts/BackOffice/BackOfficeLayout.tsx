// REACT
import { useEffect } from 'react';
import { Outlet } from 'react-router';
// LAYOUTS
import BackOfficeHeader from './BackOfficeHeader/BackOfficeHeader';
// CSS
import './style.scss';
import { useDoctor } from '../../../store/store';
import { fetchAllAppointments } from '../../../api/api';

function BackOfficeLayout() {
  const updateAllAppointments = useDoctor(
    (state) => state.UpdateAllAppointments
  );
  useEffect(() => {
    async function allAppointment() {
      try {
        const result = await fetchAllAppointments();
        updateAllAppointments(result);
      } catch (error: any) {
        console.log('error: ', error);
      }
    }
    allAppointment();
  }, []);
  return (
    <div className="backoffice-layout">
      <BackOfficeHeader />
      <Outlet />
    </div>
  );
}

export default BackOfficeLayout;
