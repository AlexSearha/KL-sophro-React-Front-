import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App/App';
import store from './store';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
