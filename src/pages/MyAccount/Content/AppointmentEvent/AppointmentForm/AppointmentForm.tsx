import React, { useState } from 'react';
// DAYJS
import dayjs from 'dayjs';
// MUI
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickerSelectionState } from '@mui/x-date-pickers/internals';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
// TYPES
import { DateCalendarProps } from '../../../../../@types';
// CSS
import './style.scss';

export default function AppointmentForm({
  appointmentsDates,
}: {
  appointmentsDates: string[] | void;
}) {
  const [hour, setHour] = React.useState('');
  const handleChangeDate = (
    value: DateCalendarProps | null,
    selectionState?: PickerSelectionState | undefined
  ) => {
    console.log(appointmentsDates);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setHour(event.target.value);
  };

  const testboucle = () => {
    let t = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 15; i < 20; i++) {
      t.push(i);
    }
    console.log(t);
  };

  return (
    <div className="appointment-form">
      <div className="appointment-form__calendar">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateCalendar']}>
            <DateCalendar
              disablePast
              onChange={handleChangeDate}
              referenceDate={dayjs()}
              views={['year', 'month', 'day']}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <div className="appointment-form__date-choice">
        <FormControl sx={{ m: 1, width: '100%' }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Heure du rendez-vous
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={hour}
            onChange={handleChange}
            autoWidth
            label="Heure du rendez-vous"
          >
            <MenuItem value="">
              <em>Veuillez choisir un créneau</em>
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

{
  /* <MenuItem value={10}>Twenty</MenuItem> */
}
