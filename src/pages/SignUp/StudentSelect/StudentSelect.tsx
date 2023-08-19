import { useField, useFormikContext } from 'formik';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  name: string;
}

function StudentSelect({ ...props }: Props) {
  const [field] = useField(props);
  const { setFieldValue } = useFormikContext();

  const handleChange = (event: SelectChangeEvent) => {
    setFieldValue(props.name, event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="student-select-label">Etudiant ?</InputLabel>
        <Select
          labelId="student-select-label"
          id="student-select"
          name={field.name}
          value={field.value}
          label="Etudiant?"
          onChange={handleChange}
        >
          <MenuItem key="oui" value="oui">
            Oui
          </MenuItem>
          <MenuItem key="non" value="non">
            Non
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default StudentSelect;
