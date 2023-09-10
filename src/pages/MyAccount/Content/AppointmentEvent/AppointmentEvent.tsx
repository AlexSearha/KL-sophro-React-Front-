import * as React from 'react';
// MUI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// TYPES
import { TabPanelProps } from '../../../../@types';
// CSS
import './style.scss';
import Appointment from './Appointment/Appointment';

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
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
        <Appointment bookState="terminé" state="done" report="rapport" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Appointment bookState="confirmé" state="booked" report="rapport" />
        <Appointment bookState="annulé" state="cancelled" report="rapport" />
        <Appointment bookState="annulé" state="cancelled" report="" />
        <Appointment bookState="annulé" state="cancelled" report="" />
        <Appointment bookState="annulé" state="cancelled" report="" />
        <Appointment bookState="annulé" state="cancelled" report="rapport" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}

export default AppointmentEvent;
