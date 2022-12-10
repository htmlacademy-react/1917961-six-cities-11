import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/data-types/offer-type';
import { BookmarkAttributes, PlaceCardAttributes} from '../../types/tags-attributes-types';
import Bookmark from '../bookmark/bookmark';
import PremiumMark from '../premium-mark/premium-mark';
import RatingStars from '../rating-stars/ratind-stars';

const bookmarkAttributesPlaceCard: BookmarkAttributes = {
  className: 'place-card__bookmark-button',
  width: 18,
  height: 19,
  classNameToActiv: 'place-card__bookmark-button--active'
};

export type PlaceCardProps = {
  placeCardAttributes: PlaceCardAttributes;
  offer: Offer;
  onMouseMove?: () => void;
  onMouseOut?: () => void;
}

function PlaceCard({placeCardAttributes, offer, onMouseMove, onMouseOut}: PlaceCardProps): JSX.Element {
  const { isPremium, previewImage, price, rating, type, id, title } = offer;
  const { card, imageWrapper, cardInfo, imgWidth, imgHeight } = placeCardAttributes;
  const formatedType = type[0].toUpperCase() + type.slice(1);
  return (
    <article className={`${card} place-card`} onMouseMove={onMouseMove} onMouseOut={onMouseOut}>
      <PremiumMark isPremium={isPremium} className={'place-card__mark'} />
      <div className={`${imageWrapper} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage}
            width={imgWidth}
            height={imgHeight}
            alt={type}
          />
        </Link>
      </div>
      <div className={`place-card__info ${cardInfo}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <Bookmark offer={offer} bookmarkAttributes={bookmarkAttributesPlaceCard}/>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <RatingStars rating={rating} />
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{formatedType}</p>
      </div>
    </article>
  );
}

export default memo(PlaceCard);
