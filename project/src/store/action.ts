import { createAction } from '@reduxjs/toolkit';
import { CitysList } from '../const';
import { Offer } from '../types/data-types/offer-type';
import { Review } from '../types/data-types/reviews-type';

export const selectCity = createAction('main/selectCity', (value: CitysList) => ({payload: value}));

export const fillOffers = createAction('main/fillOffers', (value: Offer[]) => ({payload: value}));

export const fillNearOffers = createAction('property/fillNearOffers', (value: Offer[]) => ({payload: value}));

export const fillReviews = createAction('property/fillReviews', (value: Review[]) => ({payload: value}));

