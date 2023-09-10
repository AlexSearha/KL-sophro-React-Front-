import { useEffect, useState } from 'react';
// MUI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
          <Typography>{children}</Typography>
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
  const [value, setValue] = useState(1);
  const [userInfos, UpdateUserInfos] = useUserInformations((state) => [
    state.userInfos,
    state.UpdateUserInfos,
  ]);
  const [userAppointments, UpdateUserAppointments] = useUser((state) => [
    state.appointments,
    state.UpdateAppointments,
  ]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function test() {
      if (userInfos.id) {
        const appointments = await getAllAppointments(userInfos.id);
        if (Array.isArray(appointments)) {
          // We ensure that appointment is a an array to pleased Typescript
          UpdateUserAppointments(appointments);
        }
      }
    }
    test();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfos.id]);

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
        test 1
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {userAppointments?.map((item: AppointmentProps) => (
          <Appointment item={item} key={item.id} />
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <AppointmentForm />
      </CustomTabPanel>
    </Box>
  );
}

export default AppointmentEvent;
