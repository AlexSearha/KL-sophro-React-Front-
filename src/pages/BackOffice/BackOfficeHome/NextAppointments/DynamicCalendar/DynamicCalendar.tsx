// REACT
import { useEffect, useRef, useState } from 'react';
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
// API
import { fetchAllAppointments } from '../../../../../api/api';
// TYPES
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
  const requestAbortController = useRef<AbortController | null>(null);
  const [isHandleClick, setReFetchAfterClick] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [highlightedDays, setHighlightedDays] = useState<number[]>([]);
  const [filteredAppointments, setFilteredAppointments] = useState<
    AppointmentProps[]
  >([]);
  const [allAppointments, UpdateAppointmentsOfTheDay] = useDoctor((state) => [
    state.allAppointments,
    state.UpdateAppointmentsOfTheDay,
  ]);
  const updateAllAppointments = useDoctor(
    (state) => state.UpdateAllAppointments
  );

  const fetchHighlightedDays = (date: Dayjs) => {
    const controller = new AbortController();
    const monthSelected = date.month() + 1;
    // console.log('monthSelected: ', monthSelected);
    // console.log('allAppointments: ', allAppointments);
    const filterDays = allAppointments.filter(
      (appointment) =>
        monthSelected ===
        parseInt(appointment.date.split('T')[0].split('-')[1], 10)
    );
    const getDatesFormFilteredDays = filterDays.map((appointment) =>
      parseInt(appointment.date.split('T')[0].split('-')[2], 10)
    );
    setFilteredAppointments(filterDays);
    setHighlightedDays(getDatesFormFilteredDays);
    setIsLoading(false);
    requestAbortController.current = controller;
  };

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
    const filterAppointmentByDate = filteredAppointments.filter(
      (appointment) => {
        const day = appointment.date.split('T')[0].split('-')[2];
        if (date !== null) {
          return (
            date.get('date') === parseInt(day, 10) &&
            appointment.status === 'reservé'
          );
        }
        return null;
      }
    );
    setReFetchAfterClick(!isHandleClick);
    UpdateAppointmentsOfTheDay(filterAppointmentByDate);
  };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHandleClick]);

  useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allAppointments]);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="fr"
      localeText={
        frFR.components.MuiLocalizationProvider.defaultProps.localeText
      }
    >
      <DateCalendar
        displayWeekNumber
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
