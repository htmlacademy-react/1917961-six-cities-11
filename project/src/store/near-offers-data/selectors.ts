import { NameSpace } from '../../const';
import { Offer } from '../../types/data-types/offer-type';
import { State } from '../../types/state';

export const getNearOffersData = (state: State): Offer[] => state[NameSpace.NearOffersData].nearOffers;
