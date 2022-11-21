import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITY_LIST } from '../const';
import { City, Offer } from '../types/data-types/offer-type';
import { Review } from '../types/data-types/reviews-type';
import { loadNearOffers, selectCity, loadReviews, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';

type InitialState = {
  selectedCity: City;
  offers: Offer[];
  nearOffers: Offer[];
  reviews: Review[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
}

const initialState: InitialState = {
  selectedCity: CITY_LIST.Paris,
  offers: [],
  nearOffers: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = [...new Set(action.payload.filter((offer) => offer.city.name === state.selectedCity.name))];
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};

