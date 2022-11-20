import { createReducer } from '@reduxjs/toolkit';
import { CitysList } from '../const';
import { Offer } from '../types/data-types/offer-type';
import { Review } from '../types/data-types/reviews-type';
import { fillOffers, fillNearOffers, selectCity, fillReviews } from './action';

const initialState = {
  selectedCity: CitysList.Paris,
  offers: [] as Offer[],
  nearOffers: [] as Offer[],
  reviews: [] as Review[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = [...new Set(action.payload.filter((offer) => offer.city.name === state.selectedCity))];
    })
    .addCase(fillNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(fillReviews, (state, action) => {
      state.reviews = action.payload;
    });
});

export {reducer};

