import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { Elements } from '@stripe/react-stripe-js';
import {Provider} from 'react-redux'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/cart.context';
import { stripePromise } from './stripe/stripe.utils';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./store/store";
const entryPoint = document.getElementById("root");
createRoot(entryPoint).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
