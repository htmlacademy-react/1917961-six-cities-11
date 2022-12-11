
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function NotFound (): JSX.Element {
  return (
    <div className="page page--main">
      <Header />
      <main className="page__main page__main--index">
        <div className="container">
          <div>
            <h1>Error 404. Page does not exist.</h1>
          </div>
          <div>
            <Link to='/'>Go back to main page</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
