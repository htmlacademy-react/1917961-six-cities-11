import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { favoriteOffersData } from './favorite-offers-data/favorite-offers-data';
import { nearOffersData } from './near-offers-data/near-offers-data';
import { offersData } from './offers-data/offers-data';
import { propertyData } from './property-data/property-data';
import { reviewsData } from './reviews-data/reviews-data';
import { userProcess } from './user-process/user-process';


export const rootReducer = combineReducers({
  [NameSpace.OffersData]: offersData.reducer,
  [NameSpace.FavoriteOffersData]: favoriteOffersData.reducer,
  [NameSpace.NearOffersData]: nearOffersData.reducer,
  [NameSpace.PropertyData]: propertyData.reducer,
  [NameSpace.ReviewsData]: reviewsData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
