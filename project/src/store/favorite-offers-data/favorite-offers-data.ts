import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offer } from '../../types/data-types/offer-type';
import { FavoriteOffersData } from '../../types/state';
import { fetchBookmarkAction, fetchFavoritesAction } from '../api-action';

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
      })
      .addCase(fetchBookmarkAction.fulfilled, (state, action) => {
        const index = state.favoriteOffers.findIndex((element) => (element.id === action.payload.id));
        if (index !== -1) {
          if (!action.payload.isFavorite) {
            state.favoriteOffers.splice(index,1);
          }
        } else {
          if (action.payload.isFavorite) {
            state.favoriteOffers.push(action.payload);
          }
        }


      });
  }
});

export const { loadFavoriteOffers } = favoriteOffersData.actions;
