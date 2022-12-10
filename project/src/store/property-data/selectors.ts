import { NameSpace } from '../../const';
import { Offer } from '../../types/data-types/offer-type';
import { State } from '../../types/state';

export const getProperty = (state: State): Offer | null => state[NameSpace.PropertyData].property;
export const getPropertyDataLoadingStatus = (state: State): boolean => state[NameSpace.PropertyData].isPropertyDataLoading;
