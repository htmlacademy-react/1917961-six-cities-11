import { NameSpace } from '../../const';
import { City, Offer } from '../../types/data-types/offer-type';
import { State } from '../../types/state';

export const getOffersData = (state: State): Offer[] => state[NameSpace.OffersData].offers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.OffersData].isOffersDataLoading;
export const getSelectedCity = (state: State): City => state[NameSpace.OffersData].selectedCity;
export const getErrorStatus = (state: State): boolean => state[NameSpace.OffersData].hasError;
