import Header from '../../components/header/header';
import PlacesList from '../../components/places-list/places-list';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import Tabs from '../../components/tabs/tabs';
import Map from '../../components/map/map';
import { Offer } from '../../types/data-types/offer-type';
import { classNamePlacesListForMain, MapСategory } from '../../const';
import { useCallback, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getOffersData, getSelectedCity } from '../../store/offers-data/selectors';

function Main(): JSX.Element {
  const [ activeOffer, setActiveOffer ] = useState<Offer>();

  const hundleSetActiveOffer = useCallback((offer: Offer | undefined) => setActiveOffer(offer),[]);

  const offers = useAppSelector(getOffersData);
  const selectedCity = useAppSelector(getSelectedCity);
  const offersCount = offers.length;
  const isEmptyOffers = !offersCount;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${isEmptyOffers ? 'page__main--index-empty' : ''}`}>
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
              <PlacesSorting />
              <PlacesList
                offers={offers}
                classNameAttribute={classNamePlacesListForMain}
                setActiveOffer={hundleSetActiveOffer}
              />
            </section>
            <div className="cities__right-section">
              <Map city={selectedCity} offers={offers} activeOffer={activeOffer} className={MapСategory.Cities}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
