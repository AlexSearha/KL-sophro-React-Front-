// REACT
import * as React from 'react';
// DAYJS
import dayjs, { Dayjs } from 'dayjs';
// MUI
import Badge from '@mui/material/Badge';
import { LocalizationProvider, frFR } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
// STORE
import { useDoctor } from '../../../../../store/store';
import { AppointmentProps } from '../../../../../@types';

const initialValue = dayjs();

function ServerDay(
  props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }
) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? '🟢' : undefined}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}

export default function DynamicCalendar() {
  const requestAbortController = React.useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [highlightedDays, setHighlightedDays] = React.useState<number[]>([]);
  const [filteredAppointments, setFilteredAppointments] = React.useState<
    AppointmentProps[]
  >([]);
  const allAppointments = useDoctor((state) => state.allAppointments);

  const fetchHighlightedDays = (date: Dayjs) => {
    const controller = new AbortController();
    const monthSelected = date.month();
    // console.log('monthSelected: ', monthSelected);
    // console.log('allAppointments: ', allAppointments);
    const filterDays = allAppointments.filter(
      (appointment) =>
        monthSelected ===
        parseInt(appointment.date.split('T')[0].split('-')[1].split('')[1], 10)
    );
    const getDatesFormFilteredDays = filterDays.map((appointment) =>
      parseInt(appointment.date.split('T')[0].split('-')[2], 10)
    );
    setFilteredAppointments(filterDays);
    setHighlightedDays(getDatesFormFilteredDays);
    setIsLoading(false);
    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMonthChange = (date: Dayjs) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  const handleChangeDaySelected = (date: Dayjs | null) => {
    console.log('date: ', date);
    const filterAppointmentByDate = filteredAppointments.filter(
      (appointment) => {
        console.log('appointment: ', appointment);
      }
    );
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="fr"
      localeText={
        frFR.components.MuiLocalizationProvider.defaultProps.localeText
      }
    >
      <DateCalendar
        defaultValue={initialValue}
        loading={isLoading}
        onChange={handleChangeDaySelected}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          } as any,
        }}
      />
    </LocalizationProvider>
  );
}
