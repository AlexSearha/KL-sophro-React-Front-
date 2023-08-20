import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FieldConfig, useFormikContext } from 'formik';
import dayjs from 'dayjs';

interface Props extends FieldConfig {
  label: string;
  name: string;
}

function DateOfBirthDatePicker({ label, ...props }: Props) {
  const { setFieldValue } = useFormikContext();

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setFieldValue(props.name, dayjs(date).format('DD/MM/YYYY'));
    } else {
      setFieldValue(props.name, '');
    }
  };

  return (
    <DatePicker
      sx={{ width: '50%' }}
      label={label}
      onChange={handleDateChange}
    />
  );
}

export default DateOfBirthDatePicker;
