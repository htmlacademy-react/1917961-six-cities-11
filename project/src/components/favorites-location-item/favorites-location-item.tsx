import { Offer } from '../../types/data-types/offer-type';
import { PlaceCardAttributes } from '../../types/tags-attributes-types';
import PlaceCard from '../place-card/place-card';

export const PlaceCardFavorites: PlaceCardAttributes = {
  card: 'favorites__card',
  imageWrapper: 'favorites__image-wrapper',
  cardInfo: 'favorites__card-info',
  imgWidth: 150,
  imgHeight: 110
};

export type FavoritesLocationItemProps = {
  city: string;
  offers: Offer[];
}

function FavoritesLocationItem({city, offers}: FavoritesLocationItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCard
            key={`${offer.id}-${offer.title}`.toString()}
            offer={offer}
            placeCardAttributes={PlaceCardFavorites}
          />
        ))}
      </div>
    </li>
  );
}

export default FavoritesLocationItem;
