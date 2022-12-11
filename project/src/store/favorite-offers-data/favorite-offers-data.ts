import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offer } from '../../types/data-types/offer-type';
import { FavoriteOffersData } from '../../types/state';
import { fetchFavoritesAction } from '../api-action';

const initialState: FavoriteOffersData = {
  favoriteOffers: [],
  isFavoriteOffersDataLoading: false,
};

export const favoriteOffersData = createSlice({
  name: NameSpace.FavoriteOffersData,
  initialState,
  reducers: {
    loadFavoriteOffers: (state, action: PayloadAction<Offer[]>) => {
      state.favoriteOffers = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoriteOffersDataLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteOffersDataLoading = false;
      });
  }
});

export const { loadFavoriteOffers } = favoriteOffersData.actions;
