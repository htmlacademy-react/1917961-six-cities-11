import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOffersAction, logoutAction } from '../../store/api-action';
import { getFavoriteOffersData } from '../../store/favorite-offers-data/selectors';
import { getAuthInfo } from '../../store/user-process/selectors';

function SingOut(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getAuthInfo);
  const favoritesOffer = useAppSelector(getFavoriteOffersData);

  const handleOnClick = () => {
    dispatch(logoutAction());
    dispatch(fetchOffersAction());
  };

  return (
    <React.Fragment>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{user?.email}</span>
          <span className="header__favorite-count">{favoritesOffer.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link onClick={handleOnClick} className="header__nav-link" to={AppRoute.Main}>
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </React.Fragment>
  );
}

export default SingOut;
