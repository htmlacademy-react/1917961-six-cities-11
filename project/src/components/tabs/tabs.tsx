import React, { memo } from 'react';
import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { citys } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectCity } from '../../store/offers-data/offers-data';
import { fetchOffersAction } from '../../store/api-action';
import { getSelectedCity } from '../../store/offers-data/selectors';

function Tabs(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector(getSelectedCity);
  return (
    <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {citys.map((city) => (
              <li key={city.name} className="locations__item">
                <Link
                  onClick={(evt: MouseEvent<HTMLAnchorElement>) => {
                    evt.preventDefault();
                    dispatch(selectCity(city));
                    dispatch(fetchOffersAction());
                  }}
                  className={`locations__item-link tabs__item ${selectedCity === city ? 'tabs__item--active' : ''}`}
                  to='/'
                >
                  <span>{city.name}</span>
                </Link>
              </li>)
            )}
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
}

export default memo(Tabs);
