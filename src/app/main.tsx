import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
