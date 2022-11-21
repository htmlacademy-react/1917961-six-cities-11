import { PlaceCardAttributes } from '../src/types/tags-attributes-types';
import { CitysList, Offer } from './types/data-types/offer-type';
import { OptionSorting } from './types/option-sorting-type';

export const TIMEOUT_SHOW_ERROR = 5000;

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export enum AppRoute {
  Login = '/login',
  Room = '/offer/:id',
  Favorites = '/favorites',
  Main = '/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum MapСategory {
  Property = 'property__map',
  Cities = 'cities__map',
}

export const IconParameter = {
  Size: {
    x: 27,
    y: 39
  },
  Anchor: {
    x: 13.5,
    y: 39
  },
  Url: {
    Default: 'img/pin.svg',
    Current: 'img/pin-active.svg'
  }
} as const;

export const PlaceCardFavorites: PlaceCardAttributes = {
  card: 'cities__card',
  imageWrapper: 'cities__image-wrapper',
  cardInfo: '',
  imgWidth: 260,
  imgHeight: 200
};

export const CITY_LIST: CitysList = {
  Hamburg: {
    name: 'Hamburg',
    location: {
      latitude:  53.5510846,
      longitude: 9.9936819,
      zoom: 13
    }
  },
  Dusseldorf: {
    name: 'Dusseldorf',
    location: {
      latitude:  51.2277411,
      longitude: 6.7734556,
      zoom: 13
    }
  },
  Paris: {
    name: 'Paris',
    location: {
      latitude:  48.856614,
      longitude: 2.3522219,
      zoom: 13
    }
  },
  Cologne: {
    name: 'Cologne',
    location: {
      latitude:  50.93753,
      longitude: 6.9602786,
      zoom: 13
    }
  },
  Brussels: {
    name: 'Brussels',
    location: {
      latitude:  50.8476424,
      longitude: 4.3571696,
      zoom: 13
    }
  },
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude:  52.367735,
      longitude: 4.904139,
      zoom: 13
    }
  }
};

export const citys = [
  CITY_LIST.Cologne,
  CITY_LIST.Hamburg,
  CITY_LIST.Dusseldorf,
  CITY_LIST.Brussels,
  CITY_LIST.Amsterdam,
  CITY_LIST.Paris,
] as const;

export const SORT_DEFAULT = 0;

export const ListOptionSorting: OptionSorting[] = [
  {
    id: 1,
    typeSort: 'Popular',
    titleSort: 'Popular',
    sort: (offersForSort: Offer[]) => offersForSort.sort((a,b) => a.id - b.id)
  },
  {
    id: 2,
    typeSort: 'PriceLow',
    titleSort: 'Price: high to low',
    sort: (offersForSort: Offer[]) => offersForSort.sort((a, b) => a.price - b.price)
  },
  {
    id: 3,
    typeSort: 'PriceHigh',
    titleSort: 'Price: low to high',
    sort: (offersForSort: Offer[]) => offersForSort.sort((a,b) => b.price - a.price)
  },
  {
    id: 4,
    typeSort: 'Top',
    titleSort: 'Top rated first',
    sort: (offersForSort: Offer[]) => offersForSort.sort((a,b) => b.rating - a.rating)
  }
];

export const classNamePlacesListForMain = 'cities__places-list places__list tabs__content';

export const classNamePlacesListForProperty = 'near-places__list places__list';

