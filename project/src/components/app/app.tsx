import Main from '../../pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Property from '../../pages/property/property';
import { Offer } from '../../types/data-types/offer-type';
import { Review } from '../../types/data-types/reviews-type';
import { useAppDispatch } from '../../hooks';
import { fillNearOffers, fillOffers, fillReviews, selectCity } from '../../store/action';
import { nearOffersMocks, offersMocks } from '../../mocks/offers-mocks';
import { reviewsMocks } from '../../mocks/reviews-mocks';
import { CitysList } from '../../const';


type AppProps = {
  offers: Offer[];
  nearOffers: Offer[];
  reviews: Review[];
}

function App({offers, nearOffers, reviews}: AppProps): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(fillOffers(offersMocks));
  dispatch(fillNearOffers(nearOffersMocks));
  dispatch(selectCity(CitysList.Paris));
  dispatch(fillReviews(reviewsMocks));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Main}
          element={<Main />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<Property />}
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
