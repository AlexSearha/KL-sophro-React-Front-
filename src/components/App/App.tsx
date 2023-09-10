// MUI
import { ThemeProvider, createTheme } from '@mui/material';
import { LocalizationProvider, frFR } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// ROUTER DOM
import RouterDom from '../../configs/router';
// Import DayJS
import 'dayjs/locale/fr';
// CSS
import './style.scss';

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
          <RouterDom />
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
