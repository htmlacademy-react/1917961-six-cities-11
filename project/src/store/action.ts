import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { BookmarkData } from '../types/bookmark-data';
import { City, Offer } from '../types/data-types/offer-type';
import { Review } from '../types/data-types/reviews-type';

export const selectCity = createAction('main/selectCity', (value: City) => ({payload: value}));

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const loadOffers = createAction('main/loadOffers', (value: Offer[]) => ({payload: value}));

export const loadNearOffers = createAction('property/loadNearOffers', (value: Offer[]) => ({payload: value}));

export const loadReviews = createAction('property/loadReviews', (value: Review[]) => ({payload: value}));

export const loadFavoriteOffers = createAction('main/loadFavoriteOffers', (value: Offer[]) => ({payload: value}));

export const setPropertyDataLoadingStatus = createAction<boolean>('data/setPropertyDataLoadingStatus');

export const loadProperty = createAction('property/loadProperty', (value: Offer | null) => ({payload: value}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('main/setError');

export const setBookmark = createAction('property/bookmark', (value: BookmarkData | null) => ({payload: value}));

