import { FC, } from 'react';

import styles from './FilterItem.module.css';


interface IFilterItem {
  value: string;
};

const FilterItem: FC<IFilterItem> = ({
  value,
}) => (
  <div className={ styles.filterItem }>
    { value }
  </div>
);


export default FilterItem;
