import Main from '../../pages/main/main';
import { offersMocks } from '../../mocks/offers-mocks';

function App(): JSX.Element {
  return <Main offers={offersMocks}/>;
}

export default App;
