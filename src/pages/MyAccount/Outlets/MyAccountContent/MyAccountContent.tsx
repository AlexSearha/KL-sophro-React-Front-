import { useEffect } from 'react';
import { useUser, useUserInformations } from '../../../../store/store';
import AppointmentEvent from '../AppointmentEvent/AppointmentForm/AppointmentEvent/AppointmentEvent';

// CSS
import './style.scss';
import {
  getSpecificUnavailableDays,
  getUnavailableDaysOfTheWeek,
} from '../../../../api/api';
import { UnavailableProps } from '../../../../@types';

function MyAccountContent() {
  const userInfos = useUserInformations((state) => state.userInfos);
  const [SetUnavailabilityFrom, SetUnavailabilityTo] = useUser((state) => [
    state.SetUnavailabilityFrom,
    state.SetUnavailabilityTo,
  ]);
  const SetSpecificUnavailabilitesDates = useUser(
    (state) => state.SetSpecificUnavailabilitesDates
  );

  function organizeSpecificUnavailableDate(dataToOrganize: UnavailableProps[]) {
    const array: string[] = [];
    dataToOrganize.map((value: UnavailableProps) => {
      if (value.date !== null) {
        const splitDate = value.date.split('T')[0];
        array.push(splitDate);
      }
    });
    return array;
  }

  useEffect(() => {
    async function fetchUnavailabilityDates() {
      try {
        const fetchUnavailabilityDaysOfWeek =
          await getUnavailableDaysOfTheWeek();

        SetUnavailabilityFrom(fetchUnavailabilityDaysOfWeek.days_of_week_from);
        SetUnavailabilityTo(fetchUnavailabilityDaysOfWeek.days_of_week_to);

        const fetchSpecificUnavailabaleDates =
          await getSpecificUnavailableDays();

        const organizedDates = organizeSpecificUnavailableDate(
          fetchSpecificUnavailabaleDates
        );
        SetSpecificUnavailabilitesDates(organizedDates);
      } catch (error) {
        console.log('error: ', error);
      }
    }
    fetchUnavailabilityDates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="account">
      <div className="account__container">
        <h2>
          Bienvenue{' '}
          <span>
            {userInfos.firstname} {userInfos.lastname}
          </span>
        </h2>
        <div className="account__div">
          <div className="account__div__container">
            <div className="account__div__container-futur-appointments">
              <AppointmentEvent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccountContent;
