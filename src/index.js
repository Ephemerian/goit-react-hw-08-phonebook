import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';

import App  from 'components/App/App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter  basename="/goit-react-hw-08-phonebook">
      <Provider store={store}>  
        <PersistGate persistor={persistor}>
          <App />  
        </PersistGate>
      </Provider>
      </BrowserRouter>
  </React.StrictMode>  
);
