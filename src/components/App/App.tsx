import Header from '../Header/Header';
import Container from '../Container/Container';
import SideBar from '../SideBar/SideBar';
import Main from '../Main/Main';

const App: React.FC = (): JSX.Element => (
  <>
    <Header />
    <Container>
      <SideBar />
      <Main />
    </Container>
  </>
);


export default App;
