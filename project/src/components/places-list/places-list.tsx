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
  classNameAttribute: string;
  setIdActiveOffer: (id: number | undefined ) => void;
}

function PlacesList({offers, classNameAttribute, setIdActiveOffer: setActiveOffer}: PlacesListProps): JSX.Element {
  return (
    <div className={classNameAttribute}>
      {offers.map((offer) => (
        <PlaceCard
          key={`${offer.id}-${offer.title}`.toString()}
          offer={offer}
          placeCardAttributes={PlaceCardFavorites}
          onMouseMove={() => setActiveOffer(offer.id)}
          onMouseOut={() => setActiveOffer(undefined)}
        />
      ))}
    </div>
  );
}

export default PlacesList;
