import styles from './SideBar.module.css';

import {
  FC,
} from 'react';

import Text, { TextNotation, TextVariant, } from '../common/Text/Text';
import FilterItem from './FilterItem/FilterItem';


const SideBar: FC = () => (
  <aside className={ styles.sidebar }>
    <header className={ styles.header }>
      <Text
        variant={ TextVariant.HEADING_2 }
        notation={ TextNotation.UPPERCASE }
      >
        Количество пересадок
      </Text>
    </header>

    <form>
      <FilterItem isChecked value='Все' />
      <FilterItem isChecked value='Без пересадок' />
      <FilterItem isChecked value='1 пересадка' />
      <FilterItem isChecked value='2 пересадки' />
      <FilterItem isChecked value='3 пересадки' />
    </form>
  </aside>
);


export default SideBar;
