import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { nearOffersMocks, offersMocks } from '../src/mocks/offers-mocks';
import { reviewsMocks } from '../src/mocks/reviews-mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offers={offersMocks} nearOffers={nearOffersMocks} reviews={reviewsMocks}/>
  </React.StrictMode>,
);
