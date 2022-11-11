import Main from '../../pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Property from '../../pages/property/property';
import { Offer } from '../../types/data-types/offer-type';
import Review from '../../types/data-types/reviews-type';


type AppProps = {
  offers: Offer[];
  nearOffers: Offer[];
  reviews: Review[];
}

function App({offers, nearOffers, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Main}
          element={<Main offers={ offers}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<Property offers={offers} nearOffers={nearOffers} reviews={reviews}/>}
        />
        <Route
          path='*'
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
