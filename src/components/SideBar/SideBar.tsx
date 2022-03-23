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

    <FilterItem value='Все' />
    <FilterItem value='Без пересадок' />
    <FilterItem value='1 пересадка' />
    <FilterItem value='2 пересадки' />
    <FilterItem value='3 пересадки' />
  </aside>
);


export default SideBar;
