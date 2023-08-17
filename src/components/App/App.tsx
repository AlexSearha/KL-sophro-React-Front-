// React Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// MUI
import { ThemeProvider, createTheme } from '@mui/material';
// React Component
import Home from '../../pages/Home/Home';
import MyAcccount from '../../pages/MyAccount/MyAccount';
// CSS
import './App.scss';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8', // bleu
      main: '#06752e', // bleu plus foncé
      dark: '#023a16', // bleu foncé
      contrastText: '#fff', // blanc
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moncompte" element={<MyAcccount />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
