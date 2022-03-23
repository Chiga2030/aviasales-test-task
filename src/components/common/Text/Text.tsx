import {
  FC,
} from 'react';

import styles from './Text.module.css';
import clsx from 'clsx';


export const enum TextVariant {
  UPPERCASE,
};

interface IText {
  children: string;
  variant: TextVariant;
};

const Text: FC<IText> = ({
  children,
  variant,
}) => (
  <span
    className={ clsx({
      [styles.uppercase]: variant === TextVariant.UPPERCASE,
    }) }
  >
    { children }
  </span>
);


export default Text;
