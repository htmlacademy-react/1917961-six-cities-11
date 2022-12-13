import { Offer } from '../../types/data-types/offer-type';

const COUNT = 6;

type GalleryProps = {
  offer: Offer;
}

function Gallery({offer}: GalleryProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {offer.images.slice(0,COUNT).map((image, index) => (
          <div key={`${offer.id}-${image}`} className="property__image-wrapper">
            <img className="property__image" src={image} alt={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
