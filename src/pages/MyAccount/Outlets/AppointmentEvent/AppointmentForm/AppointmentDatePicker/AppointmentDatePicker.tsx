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

const disableDates = ['2023-12-15', '2024-05-07'];

function AppointmentDatePicker({ label, ...props }: Props) {
  const SetSelectionDate = useUser((state) => state.SetSelectionDate);
  const { setFieldValue } = useFormikContext();

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
      disableDates?.some((disabledDate) =>
        dayjs(disabledDate).isSame(date, 'day')
      )
    ) {
      return true;
    }

    return dayOfWeek >= 0 && dayOfWeek <= 3; // 0 for dimanche, 1 pour lundi, 2 pour mardi, etc...
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
          disableD
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
