import FavoritesLocationItem from '../../components/favorites-location-item/favorites-location-item';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';

function Favorites (): JSX.Element {
  const { offers } = useAppSelector((state) => state);

  const citys = [...new Set(offers.map((offer) => offer.city.name))];
  const favoritList = citys.map((city) => {
    const favoritOffers = offers.filter((offer) => offer.city.name === city);
    return <FavoritesLocationItem key={`${city}`.toString()} city={city} offers={favoritOffers}/>;
  });

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritList}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
