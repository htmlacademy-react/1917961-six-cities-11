import Main from '../../pages/main/main';
import { offersMocks, nearPlacesOffers } from '../../mocks/offers-mocks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Property from '../../pages/property/property';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Main}
          element={<Main offers={offersMocks}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={offersMocks}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<Property nearOffers={nearPlacesOffers}/>}
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
