import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITY_LIST, NameSpace } from '../../const';
import { City, Offer } from '../../types/data-types/offer-type';
import { OffersData } from '../../types/state';
import { fetchOffersAction } from '../api-action';

const initialState: OffersData = {
  selectedCity: CITY_LIST.Paris,
  offers: [],
  isOffersDataLoading: false,
  hasError: false,
};

export const offersData = createSlice({
  name: NameSpace.OffersData,
  initialState,
  reducers: {
    loadOffers: (state, action: PayloadAction<Offer[]>) => {
      state.offers = [...new Set(action.payload.filter((offer) => offer.city.name === state.selectedCity.name))];
    },
    selectCity: (state, action: PayloadAction<City>) => {
      state.selectedCity = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = [...new Set(action.payload.filter((offer) => offer.city.name === state.selectedCity.name))];
        //state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      });
    //.addCase(fetchBookmarkAction.fulfilled, (state, action) => {
    //  if (action.payload !== null) {
    //    const offer = state.offers.find((element) => {
    //      if (element.id === action.payload?.hotelId) {
    //        return true;
    //      }
    //      return false;
    //    });
    //    if (offer !== undefined) {
    //      offer.isFavorite = action.payload.status;
    //    }
    //  }
    //});
  }
});

export const { loadOffers, selectCity } = offersData.actions;
