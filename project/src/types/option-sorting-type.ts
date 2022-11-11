import { Offer } from './data-types/offer-type';

type OptionSorting = {
  id: number;
  typeSort: string;
  titleSort: string;
  sort: (offers: Offer[]) => Offer[];
}

export default OptionSorting;
