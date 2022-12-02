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
  setActiveOffer?: (id: Offer | undefined ) => void;
}

function PlacesList({offers, classNameAttribute, setActiveOffer}: PlacesListProps): JSX.Element {
  return (
    <div className={classNameAttribute}>
      {offers.map((offer, index) => (
        <PlaceCard
          key={`${offer.id}-${index}`.toString()}
          offer={offer}
          placeCardAttributes={PlaceCardFavorites}
          onMouseMove={
            () => {
              if (setActiveOffer === undefined) {
                return () => null;
              }
              return setActiveOffer(offer);
            }
          }
          onMouseOut={
            () => {
              if (setActiveOffer === undefined) {
                return () => null;
              }
              return setActiveOffer(undefined);
            }
          }
        />
      ))}
    </div>
  );
}

export default PlacesList;
