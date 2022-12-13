import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITY_LIST, NameSpace } from '../../const';
import { City, Offer } from '../../types/data-types/offer-type';
import { OffersData } from '../../types/state';
import { fetchBookmarkAction, fetchOffersAction } from '../api-action';

const initialState: OffersData = {
  selectedCity: CITY_LIST.Paris,
  offers: [],
  isOffersDataLoading: false,
  hasError: false,
  isBookmarkSet: false,
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
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchBookmarkAction.pending, (state) => {
        state.isBookmarkSet = false;
      })
      .addCase(fetchBookmarkAction.fulfilled, (state, action) => {
        const index = state.offers.findIndex((element) => (element.id === action.payload.id));
        if (index !== -1) {
          state.offers.splice(index,1,action.payload);
        }
        state.isBookmarkSet = true;
      })
      .addCase(fetchBookmarkAction.rejected, (state) => {
        state.isBookmarkSet = false;
      });
  }
});

export const { loadOffers, selectCity } = offersData.actions;
