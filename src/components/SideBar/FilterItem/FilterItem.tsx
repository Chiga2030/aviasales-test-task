import { FC, } from 'react';

import styles from './FilterItem.module.css';
import {
  ReactComponent as IconEmptyCheckbox,
} from '../../../media/icons/checkbox-empty.svg';
import {
  ReactComponent as IconCheckedCheckbox,
} from '../../../media/icons/checkbox-checked.svg';


interface IFilterItem {
  value: string;
  isChecked: boolean;
};

const FilterItem: FC<IFilterItem> = ({
  value,
  isChecked,
}) => (
  <label
    className={ styles.filterItem }
  >
    <input
      hidden
      type="checkbox"
      checked={ isChecked }
    />
    { isChecked ? (
      <IconCheckedCheckbox className={ styles.checkbox } />
    ) : (
      <IconEmptyCheckbox className={ styles.checkbox } />
    ) }
    { value }
  </label>
);


export default FilterItem;
