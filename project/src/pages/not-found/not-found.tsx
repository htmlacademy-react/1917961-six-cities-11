
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
            <h1>Ошибка 404. Страница не существует.</h1>
          </div>
          <div>
            <Link to='/'>Вернуться на главную страницу</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
