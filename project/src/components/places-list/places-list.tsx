import { PlaceCardAttributes } from '../../types/tags-attributes-types';
import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/data-types/offer-type';

const PlaceCardFavorites: PlaceCardAttributes = {
  card: 'cities__card',
  imageWrapper: 'cities__image-wrapper',
  cardInfo: '',
  imgWidth: 260,
  imgHeight: 200
};

type PlacesListProps = {
  offers: Offer[];
}

function PlacesList({offers}: PlacesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={`${offer.id}-${offer.title}`.toString()}
          offer={offer}
          placeCardAttributes={PlaceCardFavorites}
        />
      ))}
    </div>
  );
}

export default PlacesList;
