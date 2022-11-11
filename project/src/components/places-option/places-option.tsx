import OptionSorting from '../../types/option-sorting-type';
import { MouseEvent } from 'react';

type PlacesOptionProps = {
  isActive: boolean;
  optionSorting: OptionSorting;
  setTypeOffersSort: (optionSorting: OptionSorting) => void;
}

function PlacesOption({isActive, optionSorting, setTypeOffersSort}: PlacesOptionProps ): JSX.Element {
  return (
    <li className={`places__option ${isActive ? 'places__option--active' : ''}`} tabIndex={0}
      onClick={(evt: MouseEvent<HTMLElement>) => {
        evt.preventDefault();
        setTypeOffersSort(optionSorting);
      }}
    >
      {optionSorting.titleSort}
    </li>
  );
}

export default PlacesOption;
