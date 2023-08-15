import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import MyAcccount from '../../pages/MyAccount/MyAccount';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moncompte" element={<MyAcccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
