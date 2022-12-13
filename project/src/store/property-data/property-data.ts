import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offer } from '../../types/data-types/offer-type';
import { PropertyData } from '../../types/state';
import { fetchBookmarkAction, fetchPropertyAction } from '../api-action';

const initialState: PropertyData = {
  property: null,
  isPropertyDataLoading: false,
};

export const propertyData = createSlice({
  name: NameSpace.PropertyData,
  initialState,
  reducers: {
    loadProperty: (state, action: PayloadAction<Offer | null>) => {
      state.property = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPropertyAction.pending, (state) => {
        state.isPropertyDataLoading = true;
      })
      .addCase(fetchPropertyAction.fulfilled, (state, action) => {
        state.property = action.payload;
        state.isPropertyDataLoading = false;
      })
      .addCase(fetchPropertyAction.rejected, (state, action) => {
        state.property = null;
        state.isPropertyDataLoading = false;
      })
      .addCase(fetchBookmarkAction.fulfilled, (state, action) => {
        state.property = action.payload;
      });
  }
});

export const { loadProperty } = propertyData.actions;
