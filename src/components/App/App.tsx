import { BrowserRouter, Route, Routes } from 'react-router-dom';
// MUI
import { ThemeProvider, createTheme } from '@mui/material';
import { LocalizationProvider, frFR } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// Import DayJS
import 'dayjs/locale/fr';
// PAGES
import Home from '../../pages/Home/Home';
import LoginPage from '../../pages/Login/Login';
import SignUpPage from '../../pages/SignUp/SignUp';
import BackOfficePage from '../../pages/BackOffice/BackOffice';
import MyAccountLayout from '../../pages/MyAccount/MyAccountLayout';
// CSS
import './style.scss';
import Test from '../../pages/Test/Test';
import MyAcccount from '../../pages/MyAccount/Pages/MyAccount';
import Test2 from '../../pages/Test/Test2';

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
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="fr"
          localeText={
            frFR.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<Home />} />
              <Route path="/connexion" element={<LoginPage />} />
              <Route path="/inscription" element={<SignUpPage />} /> */}
              <Route path="/" element={<MyAccountLayout />} />
              <Route index element={<Test />} />
              {/* <Route path="infos" element={<Test2 />} /> */}
            </Routes>
          </BrowserRouter>
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
