import { Offer } from './data-types/offer-type';

export type OptionSorting = {
  id: number;
  typeSort: string;
  titleSort: string;
  sort: (offers: Offer[]) => Offer[];
}

