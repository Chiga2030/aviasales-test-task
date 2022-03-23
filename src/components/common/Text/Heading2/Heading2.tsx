import { FC, } from 'react';

import styles from '../Text.module.css';
import clsx from 'clsx';
import { TextNotation, } from '../Text';

interface IHeading {
  text: string;
  notation?: TextNotation;
};

export const Heading2: FC<IHeading> = ({
  text,
  notation,
}) => (
  <h2 className={ clsx({
    [styles.baseText]: true,
    [styles.uppercase]: notation === TextNotation.UPPERCASE,
  }) }>
    { text }
  </h2>
);
