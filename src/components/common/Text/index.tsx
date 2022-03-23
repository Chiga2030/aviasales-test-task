import {
  FC,
} from 'react';
import { Heading2, } from './Heading2/Heading2';


export const enum TextVariant {
  HEADING_2,
};

export const enum TextNotation {
  UPPERCASE,
}

interface IText {
  children: string;
  variant: TextVariant;
  notation?: TextNotation;
};

const Text: FC<IText> = ({
  children,
  variant,
  notation,
}) => (
  <>
    { variant === TextVariant.HEADING_2
      ? (<Heading2 text={ children } notation={ notation } />)
      : false }
  </>
);


export default Text;
