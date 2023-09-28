// REACT
import React, { useEffect } from 'react';
// MUI
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
// API
import { fetchAllClients } from '../../../../../api/api';
import { useDoctor } from '../../../../../store/store';
// TYPES
interface ValueProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ value, setValue }: ValueProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const [allClients, UpdateAllClients] = useDoctor((state) => [
    state.allClients,
    state.UpdateAllClients,
  ]);

  const filteredClient = () => {
    return allClients?.map((client) => {
      return <h3 key={client.id}>{client.firstname}</h3>;
    });
  };

  useEffect(() => {
    async function getAllClients() {
      try {
        const result = await fetchAllClients();
        UpdateAllClients(result);
        console.log('result: ', result);
      } catch (error: any) {
        console.log('error: ', error);
      }
    }
    getAllClients();
  }, []);

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <TextField
        id="input-with-icon-textfield"
        label="Rechercher un client"
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchIcon fontSize="large" />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
      {filteredClient()}
    </Box>
  );
}
