import { PlaceCardAttributes } from '../src/types/tags-attributes-types';
import { City } from './types/data-types/offer-type';

export const PLACE_COUNT = 10;

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

export const CitysListLocation: City[] = [
  {
    name: 'Hamburg',
    location: {
      latitude:  53.5510846,
      longitude: 9.9936819,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude:  51.2277411,
      longitude: 6.7734556,
      zoom: 13
    }
  },
  {
    name: 'Paris',
    location: {
      latitude:  48.856614,
      longitude: 2.3522219,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude:  50.93753,
      longitude: 6.9602786,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude:  50.8476424,
      longitude: 4.3571696,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude:  52.367735,
      longitude: 4.904139,
      zoom: 13
    }
  }
];

export enum CitysList {
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
}

export const citys = [
  CitysList.Cologne,
  CitysList.Hamburg,
  CitysList.Dusseldorf,
  CitysList.Brussels,
  CitysList.Amsterdam,
  CitysList.Paris,
] as const;

export enum TypeOffersSort {
  Popular = 'Popular',
  PriceLow = 'PriceLow',
  PriceHigh = 'PriceHigh',
  Top = 'Top'
}
