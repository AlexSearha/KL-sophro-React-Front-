import { useEffect, useState } from 'react';
// MUI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// DAYJS
import dayjs from 'dayjs';
// TYPES
import { AppointmentProps, TabPanelProps } from '../../../../@types';
// COMPONENTS
import Appointment from './Appointment/Appointment';
// API
import { getAllAppointments } from '../../../../api/api';
// STORE
import { useUser, useUserInformations } from '../../../../store/store';
// CSS
import './style.scss';

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function AppointmentEvent() {
  const [value, setValue] = useState<number>(1);
  const [userInfos] = useUserInformations((state) => [state.userInfos]);
  const [userAppointments, UpdateUserAppointments] = useUser((state) => [
    state.appointments,
    state.UpdateAppointments,
  ]);
  const [pastAppointmentsState, setPastAppointmentsState] = useState<
    AppointmentProps[]
  >([]);
  const [futurAppointmentsState, setFuturAppointmentsState] = useState<
    AppointmentProps[]
  >([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const filterFuturOrPastAppointment = () => {
    const pastAppointments: AppointmentProps[] = [];
    const futurAppointments: AppointmentProps[] = [];
    userAppointments?.forEach((appointment) => {
      const dateToTest = appointment.date.split('T')[0];
      const isBefore = dayjs().isBefore(dateToTest);
      if (isBefore) {
        futurAppointments.push(appointment);
      } else {
        pastAppointments.push(appointment);
      }
    });
    setPastAppointmentsState(pastAppointments);
    setFuturAppointmentsState(futurAppointments);
  };

  useEffect(() => {
    async function getAppointment() {
      try {
        if (userInfos.id) {
          const appointments = await getAllAppointments(userInfos.id);
          if (Array.isArray(appointments)) {
            UpdateUserAppointments(appointments);
            // setLoading(false); // Mettre à jour l'état de chargement une fois les données chargées
          }
        }
      } catch (error) {
        console.log('ERROR: ', error);
      }
    }
    getAppointment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfos.id]);

  useEffect(() => {
    if (userAppointments) {
      console.log('userAppointments: ', userAppointments);
      filterFuturOrPastAppointment();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAppointments]);

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ textTransform: 'capitalize' }}
            label="Rendez-vous passés"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ textTransform: 'capitalize' }}
            label="Prochains rendez-vous"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {pastAppointmentsState.length > 0 ? (
          pastAppointmentsState?.map((item: AppointmentProps) => (
            <Appointment item={item} key={item.id} />
          ))
        ) : (
          <p>Vous n&apos;avez pas de rendez-vous passé</p>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {futurAppointmentsState.length > 0 ? (
          futurAppointmentsState?.map((item: AppointmentProps) => (
            <Appointment item={item} key={item.id} />
          ))
        ) : (
          <p>Vous n&apos;avez pas de rendez-vous</p>
        )}
      </CustomTabPanel>
    </Box>
  );
}

export default AppointmentEvent;
