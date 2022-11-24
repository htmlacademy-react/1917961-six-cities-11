import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITY_LIST } from '../const';
import { City, Offer } from '../types/data-types/offer-type';
import { Review } from '../types/data-types/reviews-type';
import { loadNearOffers, selectCity, loadReviews, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus, setFavoriteOffersDataLoadingStatus } from './action';

type InitialState = {
  selectedCity: City;
  isOffersDataLoading: boolean;
  offers: Offer[];
  nearOffers: Offer[];
  reviews: Review[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isFavoriteOffersDataLoding: boolean;
  favoriteOffers: Offer[];
}

const initialState: InitialState = {
  selectedCity: CITY_LIST.Paris,
  isOffersDataLoading: false,
  offers: [],
  nearOffers: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isFavoriteOffersDataLoding: false,
  favoriteOffers: [],
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
    })
    .addCase(setFavoriteOffersDataLoadingStatus, (state, action) => {
      state.isFavoriteOffersDataLoding = action.payload;
    });
});

export {reducer};

