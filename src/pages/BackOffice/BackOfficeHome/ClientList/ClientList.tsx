// import './style.scss';

import { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';

function ClientList() {
  const [value, setValue] = useState<string>('');

  return (
    <div>
      <SearchBar setValue={setValue} value={value} />
      <h1>{value}</h1>
    </div>
  );
}

export default ClientList;
