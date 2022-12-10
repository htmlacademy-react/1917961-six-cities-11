import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { NearOffersData } from '../../types/state';
import { fetchNearOffersAction } from '../api-action';

const initialState: NearOffersData = {
  nearOffers: [],
};

export const nearOffersData = createSlice({
  name: NameSpace.NearOffersData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      })
      .addCase(fetchNearOffersAction.rejected, (state) => {
        state.nearOffers = [];
      });
  }
});
