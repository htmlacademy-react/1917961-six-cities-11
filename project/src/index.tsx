import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { nearOffersMocks, offersMocks } from '../src/mocks/offers-mocks';
import { reviewsMocks } from '../src/mocks/reviews-mocks';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offersMocks} nearOffers={nearOffersMocks} reviews={reviewsMocks}/>
    </Provider>
  </React.StrictMode>,
);
