import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { City, Offer } from '../types/data-types/offer-type';
import { Review } from '../types/data-types/reviews-type';

export const selectCity = createAction('main/selectCity', (value: City) => ({payload: value}));

export const loadOffers = createAction('main/loadOffers', (value: Offer[]) => ({payload: value}));

export const loadNearOffers = createAction('property/loadNearOffers', (value: Offer[]) => ({payload: value}));

export const loadReviews = createAction('property/loadReviews', (value: Review[]) => ({payload: value}));

export const loadFavoriteOffers = createAction('main/loadFavoriteOffers', (value: Offer[]) => ({payload: value}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('game/setError');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOFFERSDataLoadingStatus');

export const setFavoriteOffersDataLoadingStatus = createAction<boolean>('data/setFavoriteOffersDataLoadingStatus');

