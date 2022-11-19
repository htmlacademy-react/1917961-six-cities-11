import Header from '../../components/header/header';
import PlacesList from '../../components/places-list/places-list';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import Tabs from '../../components/tabs/tabs';
import Map from '../../components/map/map';
import { Offer } from '../../types/data-types/offer-type';
import { CitysListLocation, classNamePlacesListForMain, MapСategory } from '../../const';
import { useState } from 'react';
import { CityDefault } from '../../mocks/offers-mocks';
import { useAppSelector } from '../../hooks';

function Main(): JSX.Element {
  const [ activeOffer, setActiveOffer ] = useState<Offer>();

  const { selectedCity, offers } = useAppSelector((state) => state);
  const offersCount = offers.length;
  const isEmptyOffers = !offersCount;
  const cityLocation = ()=> {
    const findLocation = CitysListLocation.find((element) => (element.name === selectedCity));
    if (findLocation !== undefined) {
      return findLocation;
    }
    return CityDefault;
  };

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
                setActiveOffer={(offer: Offer | undefined) => setActiveOffer(offer)}
              />
            </section>
            <div className="cities__right-section">
              <Map city={cityLocation()} offers={offers} activeOffer={activeOffer} className={MapСategory.Cities}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
