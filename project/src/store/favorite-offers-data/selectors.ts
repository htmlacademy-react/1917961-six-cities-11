import { NameSpace } from '../../const';
import { Offer } from '../../types/data-types/offer-type';
import { State } from '../../types/state';

export const getFavoriteOffersData = (state: State): Offer[] => state[NameSpace.FavoriteOffersData].favoriteOffers;
export const getFavoriteOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.FavoriteOffersData].isFavoriteOffersDataLoading;

