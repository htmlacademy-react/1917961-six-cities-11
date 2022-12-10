import { memo, useState } from 'react';
import { ListOptionSorting, SORT_DEFAULT } from '../../const';
import PlacesOption from '../places-option/places-option';

function PlacesSorting(): JSX.Element {
  const [isVisibleOption, setVisibleOption] = useState(false);
  const [offersSort, setOffersSort] = useState(ListOptionSorting[SORT_DEFAULT]);
  return (
    <form className="places__sorting" action="#" method="get" onClick={() => setVisibleOption((prevState: boolean) => !prevState)}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {offersSort.titleSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {isVisibleOption && ListOptionSorting.map((option) => (
          <PlacesOption
            key={`${option.id}-${option.typeSort}`}
            isActive={option.id === offersSort.id}
            optionSorting={option}
            setTypeOffersSort={setOffersSort}
          />
        ))}
      </ul>
    </form>
  );
}

export default memo(PlacesSorting);
