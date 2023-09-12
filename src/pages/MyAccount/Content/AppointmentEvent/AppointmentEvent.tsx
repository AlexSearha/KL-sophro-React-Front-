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
import AppointmentForm from './AppointmentForm/AppointmentForm';
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
          <Typography component={'span'}>{children}</Typography>
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
  const [pastAppointmentsState, setPastAppointmentsState] = useState([]);
  const [futurAppointmentsState, setFuturAppointmentsState] = useState([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getAppointmentPatch = (): string[] | void => {
    const result: string[] = [];
    userAppointments?.map((appointment) => {
      const date = appointment.date.split('T')[0];
      const hour = appointment.date.split('T')[1].split('.')[0];
      if (date && hour) {
        result.push([date, hour]);
      }
    });
    return result;
  };
  const filterFuturOrPastAppointment = () => {
    // console.log('date: ', date);
    const pastAppointments: string[] = [];
    const futurAppointments: string[] = [];
    userAppointments?.forEach((appointment) => {
      const dateToTest = appointment.date.split('T')[0];
      console.log('dateToTest: ', dateToTest);
      const isBefore = dayjs().isBefore(dateToTest);
      console.log('isAfter: ', isBefore);
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
  }, [userAppointments]);

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
          <Tab
            sx={{ textTransform: 'capitalize' }}
            label="Prendre rendez-vous"
            {...a11yProps(2)}
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
      <CustomTabPanel value={value} index={2}>
        <AppointmentForm appointmentsDates={getAppointmentPatch()} />
      </CustomTabPanel>
    </Box>
  );
}

export default AppointmentEvent;
