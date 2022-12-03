import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITY_LIST } from '../const';
import { City, Offer } from '../types/data-types/offer-type';
import { Review } from '../types/data-types/reviews-type';
import { loadNearOffers, selectCity, loadReviews, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus, loadProperty, setPropertyDataLoadingStatus, setBookmark, loadFavoriteOffers } from './action';

type InitialState = {
  selectedCity: City;
  isOffersDataLoading: boolean;
  offers: Offer[];
  nearOffers: Offer[];
  reviews: Review[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isfavoriteOffersDataLoading: boolean;
  favoriteOffers: Offer[];
  isPropertyDataLoading: boolean;
  property: Offer | null;
}

const initialState: InitialState = {
  selectedCity: CITY_LIST.Paris,
  isOffersDataLoading: false,
  offers: [],
  nearOffers: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isfavoriteOffersDataLoading: false,
  favoriteOffers: [],
  isPropertyDataLoading: false,
  property: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = [...new Set(action.payload.filter((offer) => offer.city.name === state.selectedCity.name))];
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setPropertyDataLoadingStatus, (state, action) => {
      state.isPropertyDataLoading = action.payload;
    })
    .addCase(loadProperty, (state, action) => {
      state.property = action.payload;
    })
    .addCase(setBookmark, (state, action) => {
      if (action.payload !== null) {
        const offer = state.offers.find((element) => {
          if (element.id === action.payload?.hotelId) {
            return true;
          }
          return false;
        });
        if (offer !== undefined) {
          offer.isFavorite = action.payload.status;
        }
      }
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};

