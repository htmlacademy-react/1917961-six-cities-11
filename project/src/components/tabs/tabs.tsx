import React from 'react';
import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { citys } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { offersMocks } from '../../mocks/offers-mocks';
import { fillOffers, selectCity } from '../../store/action';

function Tabs(): JSX.Element {
  const dispatch = useAppDispatch();
  const { selectedCity } = useAppSelector((state) => state);
  return (
    <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {citys.map((city) => (
              <li key={city} className="locations__item">
                <Link
                  onClick={(evt: MouseEvent<HTMLAnchorElement>) => {
                    evt.preventDefault();
                    dispatch(selectCity(city));
                    dispatch(fillOffers(offersMocks));
                  }}
                  className={`locations__item-link tabs__item ${selectedCity === city ? 'tabs__item--active' : ''}`}
                  to='/'
                >
                  <span>{city}</span>
                </Link>
              </li>)
            )}
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Tabs;
