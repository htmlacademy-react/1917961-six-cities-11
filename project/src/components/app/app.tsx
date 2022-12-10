import Main from '../../pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Property from '../../pages/property/property';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { getAuthCheckedStatus, getAuthorizationStatus } from '../../store/user-process/selectors';
import { getErrorStatus, getOffersDataLoadingStatus } from '../../store/offers-data/selectors';
import ErrorScreen from '../../pages/error-screen/error-screen';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);

  if (!isAuthChecked || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (hasError) {
    return (
      <ErrorScreen />);
  }

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
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Property}
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
