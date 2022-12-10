import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import { City, Offer } from './data-types/offer-type';
import { Review } from './data-types/reviews-type';

export type OffersData = {
  selectedCity: City;
  offers: Offer[];
  isOffersDataLoading: boolean;
  hasError: boolean;
}

export type NearOffersData = {
  nearOffers: Offer[];
}

export type FavoriteOffersData = {
  favoriteOffers: Offer[];
  isFavoriteOffersDataLoading: boolean;
}

export type PropertyData = {
  property: Offer | null;
  isPropertyDataLoading: boolean;
}

export type ReviewsData = {
  reviews: Review[];
}

export type AppProcess = {
  error: string | null;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
