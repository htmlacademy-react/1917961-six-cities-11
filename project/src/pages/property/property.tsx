import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Bookmark from '../../components/bookmark/bookmark';
import Gallery from '../../components/gallery/gallery';
import Header from '../../components/header/header';
import Inside from '../../components/inside/inside';
import PlacesList from '../../components/places-list/places-list';
import PremiumMark from '../../components/premium-mark/premium-mark';
import RatingStars from '../../components/rating-stars/ratind-stars';
import ReviewForm from '../../components/review-form/review-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import { classNamePlacesListForProperty, MapСategory } from '../../const';
import { Offer } from '../../types/data-types/offer-type';
import { BookmarkAttributes } from '../../types/tags-attributes-types';
import NotFound from '../not-found/not-found';
import { useAppSelector } from '../../hooks';

const bookmarkAttributesProperty: BookmarkAttributes = {
  className: 'property__bookmark-button',
  width: 31,
  height: 33,
  classNameToActiv: 'property__bookmark-button--active'
};

function Property(): JSX.Element {

  const [ activeOffer, setActiveOffer ] = useState<Offer>();
  const { selectedCity, offers, nearOffers, reviews } = useAppSelector((state) => state);

  const { id } = useParams();
  if (id === undefined) {
    return <NotFound />;
  }

  const offer = offers.find((item) => item.id === Number(id));
  if (offer === undefined) {
    return <NotFound />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">

          <Gallery offer={offer}/>

          <div className="property__container container">
            <div className="property__wrapper">

              <PremiumMark isPremium={offer.isPremium} className={'property__mark'} />

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>

                <Bookmark isFavorite={offer.isFavorite} bookmarkAttributes={bookmarkAttributesProperty}/>

              </div>

              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <RatingStars rating={offer.rating}/>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${offer.bedrooms.toString()} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${offer.maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price.toString()}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>

              <Inside offer={offer}/>

              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    Angelina
                  </span>
                  <span className="property__user-status">
                    Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>

              <section className="property__reviews reviews">

                <ReviewsList reviews={reviews}/>

                <ReviewForm />

              </section>
            </div>
          </div>
          <Map city={selectedCity} offers={offers} activeOffer={activeOffer} className={MapСategory.Property}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>

            <PlacesList
              offers={nearOffers}
              classNameAttribute={classNamePlacesListForProperty}
              setActiveOffer={(offerActive: Offer | undefined) => setActiveOffer(offerActive)}
            />

          </section>
        </div>
      </main>
    </div>
  );
}

export default Property;
