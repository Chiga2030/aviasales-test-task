import styles from './SideBar.module.css';

import {
  FC,
} from 'react';

import Text, { TextNotation, TextVariant, } from '../common/Text';


const SideBar: FC = () => (
  <aside className={ styles.sidebar }>
    <Text
      variant={ TextVariant.HEADING_2 }
      notation={ TextNotation.UPPERCASE }
    >
      Количество пересадок
    </Text>
  </aside>
);


export default SideBar;
