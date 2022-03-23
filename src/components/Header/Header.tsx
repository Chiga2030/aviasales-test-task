import styles from './Header.module.css';


const Header: React.FC = (): JSX.Element => (
  <header className={ styles.content }>
    <img src="/media/logo.svg" alt="logo" />
  </header>
);


export default Header;
