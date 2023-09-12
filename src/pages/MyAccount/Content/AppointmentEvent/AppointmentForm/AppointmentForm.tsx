import React, { useEffect, useState } from 'react';
// DAYJS
import dayjs from 'dayjs';
// MUI
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, frFR } from '@mui/x-date-pickers';
import { PickerSelectionState } from '@mui/x-date-pickers/internals';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
// TYPES
import { DateCalendarProps } from '../../../../../@types';
// CSS
import './style.scss';

export default function AppointmentForm({
  appointmentsDates,
}: {
  appointmentsDates: string[] | void;
}) {
  const [hours, setHours] = React.useState<string>('');
  const [selectionDate, setSelectionDate] = useState<number[]>([]);
  const handleChangeDate = (
    value: DateCalendarProps | null,
    selectionState?: PickerSelectionState | undefined
  ) => {
    if (value) {
      setHours('');
      setSelectionDate([value?.$y, value?.$M + 1, value?.$D]);
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setHours(event.target.value);
  };

  function filterDates(): string[][] {
    return appointmentsDates.filter((testDates) => {
      const [bookedDate] = testDates;
      const [year, month, day] = bookedDate.split('-');

      return (
        parseInt(year, 10) === selectionDate[0] &&
        parseInt(month, 10) === selectionDate[1] &&
        parseInt(day, 10) === selectionDate[2]
      );
    });
  }

  function filterHours() {
    const dates = filterDates();
    const splitHoursFilteredArray: number[] = [];
    dates.forEach((date) => {
      const splitHours = date[1].split(':')[0].split('')[1];
      splitHoursFilteredArray.push(parseInt(splitHours, 10));
    });
    return splitHoursFilteredArray;
  }

  function availableItemSlots() {
    const filteredHours = filterHours();
    const availableSlot = [];
    if (selectionDate.length > 0) {
      if (filteredHours.length === 0) {
        for (let i = 5; i < 20; i++) {
          const menuItem = <MenuItem key={i} value={i}>{`${i}h00`}</MenuItem>;
          availableSlot.push(menuItem);
        }
      } else {
        for (let i = 5; i < 20; i++) {
          filteredHours.forEach((item) => {
            if (item !== i) {
              const menuItem = (
                <MenuItem key={i} value={i}>{`${i}h00`}</MenuItem>
              );
              availableSlot.push(menuItem);
            }
          });
        }
      }
    }

    return availableSlot;
  }

  const shouldDisableDate = (date: dayjs.Dayjs) => {
    const dayOfWeek = date.day(); // 0 for dimanche, 1 pour lundi, 2 pour mardi, etc...
    return dayOfWeek >= 0 && dayOfWeek <= 3;
  };

  useEffect(() => {
    const availableSlot = availableItemSlots();
    console.log('availableSlot: ', availableSlot);
  }, [selectionDate]);

  return (
    <div className="appointment-form">
      <div className="appointment-form__calendar">
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="fr"
          localeText={
            frFR.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          <DemoContainer components={['DateCalendar']}>
            <DateCalendar
              disablePast
              displayWeekNumber
              shouldDisableDate={shouldDisableDate}
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
            value={hours}
            onChange={handleChange}
            autoWidth
            label="Heure du rendez-vous"
          >
            <MenuItem key="none" value="">
              <em>Veuillez choisir un créneau</em>
            </MenuItem>
            {availableItemSlots()}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
