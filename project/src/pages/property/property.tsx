import { useEffect } from 'react';
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
import { AuthorizationStatus, classNamePlacesListForProperty, MapСategory } from '../../const';
import { BookmarkAttributes } from '../../types/tags-attributes-types';
import NotFound from '../not-found/not-found';
import { useAppSelector } from '../../hooks';
import { loadProperty } from '../../store/property-data/property-data';
import { fetchNearOffersAction, fetchPropertyAction, fetchReviewsAction } from '../../store/api-action';
import { store } from '../../store';
import LoadingScreen from '../loading-screen/loading-screen';
import { Offer } from '../../types/data-types/offer-type';
import PropertyHost from '../../components/property-host/property-host';
import { getSelectedCity } from '../../store/offers-data/selectors';
import { getProperty, getPropertyDataLoadingStatus } from '../../store/property-data/selectors';
import { getNearOffersData } from '../../store/near-offers-data/selectors';
import { getReviewsData } from '../../store/reviews-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

const bookmarkAttributesProperty: BookmarkAttributes = {
  className: 'property__bookmark-button',
  width: 31,
  height: 33,
  classNameToActiv: 'property__bookmark-button--active'
};

function Property(): JSX.Element {
  const selectedCity = useAppSelector(getSelectedCity);
  const property = useAppSelector(getProperty);
  const nearOffers = useAppSelector(getNearOffersData);
  const reviews = useAppSelector(getReviewsData);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isPropertyDataLoading = useAppSelector(getPropertyDataLoadingStatus);

  const { id } = useParams();

  useEffect(() => {
    store.dispatch(fetchPropertyAction(id));
    store.dispatch(fetchNearOffersAction(id));
    store.dispatch(fetchReviewsAction(id));
    return () => {
      store.dispatch(loadProperty(null));
    };
  }, [id]);

  if (authorizationStatus === AuthorizationStatus.Unknown || isPropertyDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (property === null) {
    return <NotFound />;
  }

  const OfferAndNearOffers: Offer[] = [property].concat(nearOffers);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <Gallery offer={property}/>
          <div className="property__container container">
            <div className="property__wrapper">
              <PremiumMark isPremium={property.isPremium} className={'property__mark'} />
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {property.title}
                </h1>
                <Bookmark offer={property} bookmarkAttributes={bookmarkAttributesProperty}/>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <RatingStars rating={property.rating}/>
                </div>
                <span className="property__rating-value rating__value">{property.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {property.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${property.bedrooms.toString()} ${property.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${property.maxAdults.toString()} ${property.maxAdults > 1 ? 'adults' : 'adult'}`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{property.price.toString()}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <Inside offer={property}/>
              <PropertyHost property={property} />
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews}/>
                {authorizationStatus === AuthorizationStatus.Auth ? <ReviewForm hotelId={property.id}/> : ''}
              </section>
            </div>
          </div>
          <Map city={selectedCity} offers={OfferAndNearOffers} activeOffer={property} className={MapСategory.Property}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList
              offers={nearOffers}
              classNameAttribute={classNamePlacesListForProperty}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Property;
