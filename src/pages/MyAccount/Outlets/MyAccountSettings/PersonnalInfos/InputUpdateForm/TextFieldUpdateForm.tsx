// REACT
import * as React from 'react';
// MUI
import { Button, TextField } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
// API
import { fetchAddressAPI, updateClientInfos } from '../../../../../../api/api';
// STORE
import { useUserInformations } from '../../../../../../store/store';
// TYPES
import { APIaddressFeaturesProps } from '../../../../../../@types';
// CSS
import './style.scss';

interface InputUpdateFormProps {
  label: string;
  name: string;
  userId: number | null;
}

function InputUpdateForm({ label, name, userId }: InputUpdateFormProps) {
  const [value, setValue] = React.useState<string>('');
  const [updateSuccess, setUpdateSuccess] = React.useState<boolean>(false);
  const [updateError, setUpdateError] = React.useState<boolean>(false);
  const [addressResult, setAddressResult] = React.useState<
    APIaddressFeaturesProps[]
  >([]);
  const UpdateUserInfos = useUserInformations((state) => state.UpdateUserInfos);
  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      event.preventDefault();
      const updateData = {
        [name]: value,
      };
      const fetchResult = await updateClientInfos(userId, updateData);
      UpdateUserInfos(fetchResult);
      setUpdateSuccess(true);
    } catch (error) {
      console.log('error: ', error);
      setUpdateError(true);
    }
  };

  const monitorAddressResult = addressResult?.map((address) => {
    return (
      <div
        className="dropdown-element"
        key={address.properties.id}
        onClick={() => setValue(address.properties.label)}
        onKeyDown={() => console.log('coucou')}
      >
        {address.properties.label}
      </div>
    );
  });

  React.useEffect(() => {
    async function fetchAddress() {
      if (value.length > 5 && name === 'address') {
        const result = await fetchAddressAPI(value);
        if (result) {
          setAddressResult(result.features);
        }
      }
    }
    fetchAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="textfield-updateform">
      <form className="textfield-updateform__form" onSubmit={handleSubmit}>
        <div className="textfield-updateform__form-container">
          <TextField
            fullWidth
            label={label}
            value={value}
            name={name}
            onFocus={() => {
              setUpdateError(false);
              setUpdateSuccess(false);
            }}
            onChange={(e) => setValue(e.target.value)}
            variant="outlined"
            inputProps={name === 'phone_number' ? { maxLength: 10 } : {}}
          />

          {addressResult[0]?.properties.label === value ||
          value === '' ||
          value.length < 5 ? null : (
            <div className="textfield-updateform__form-dropdown">
              {monitorAddressResult}
            </div>
          )}
        </div>
        <Button
          type="submit"
          sx={{ textTransform: 'initial', fontSize: 15, fontWeight: 700 }}
          size="small"
          variant="contained"
        >
          Metre à jour
        </Button>
        {updateSuccess ? (
          <CheckCircleIcon fontSize="medium" sx={{ color: 'green' }} />
        ) : null}
        {updateError ? (
          <CancelSharpIcon fontSize="medium" sx={{ color: 'red' }} />
        ) : null}
      </form>
    </div>
  );
}

export default InputUpdateForm;
