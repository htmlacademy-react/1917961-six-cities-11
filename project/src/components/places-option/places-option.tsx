import { OptionSorting } from '../../types/option-sorting-type';
import { MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadOffers } from '../../store/offers-data/offers-data';
import { getOffersData } from '../../store/offers-data/selectors';

type PlacesOptionProps = {
  isActive: boolean;
  optionSorting: OptionSorting;
  setTypeOffersSort: (optionSorting: OptionSorting) => void;
}

function PlacesOption({isActive, optionSorting, setTypeOffersSort}: PlacesOptionProps ): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getOffersData);
  const offersForSort = [...offers];
  return (
    <li className={`places__option ${isActive ? 'places__option--active' : ''}`} tabIndex={0}
      onClick={(evt: MouseEvent<HTMLElement>) => {
        evt.preventDefault();
        setTypeOffersSort(optionSorting);
        dispatch(loadOffers(optionSorting.sort(offersForSort)));
      }}
    >
      {optionSorting.titleSort}
    </li>
  );
}

export default PlacesOption;
