// MUI
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// FORMIK
import { FieldConfig, useFormikContext } from 'formik';
import { DateCalendar, LocalizationProvider, frFR } from '@mui/x-date-pickers';
// DAYJS
import dayjs from 'dayjs';
// TYPE
import { useUser } from '../../../../../../store/store';

interface Props extends FieldConfig {
  label: string;
  name: string;
}

function AppointmentDatePicker({ label, ...props }: Props) {
  const { setFieldValue } = useFormikContext();

  const [
    SetSelectionDate,
    unavailabilityFrom,
    unavailabilityTo,
    specificUnavailabilitesDates,
  ] = useUser((state) => [
    state.SetSelectionDate,
    state.unavailabilityFrom,
    state.unavailabilityTo,
    state.specificUnavailabilitesDates,
  ]);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setFieldValue('appointmentHour', '');
      setFieldValue(props.name, dayjs(date).format('YYYY-MM-DD'));
      SetSelectionDate([dayjs(date).format('YYYY-MM-DD')]);
    } else {
      setFieldValue(props.name, '');
    }
  };

  const shouldDisableDate = (date: dayjs.Dayjs) => {
    const dayOfWeek = date.day();

    if (
      specificUnavailabilitesDates?.some((disabledDate) =>
        dayjs(disabledDate).isSame(date, 'day')
      )
    ) {
      return true;
    }
    if (unavailabilityFrom !== null && unavailabilityTo !== null) {
      return dayOfWeek >= unavailabilityFrom && dayOfWeek <= unavailabilityTo; // 0 for dimanche, 1 pour lundi, 2 pour mardi, etc...
    }
    return null;
  };

  return (
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
          label={label}
          onChange={handleDateChange}
          referenceDate={dayjs()}
          views={['year', 'month', 'day']}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default AppointmentDatePicker;
