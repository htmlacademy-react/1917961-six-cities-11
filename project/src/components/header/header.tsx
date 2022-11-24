import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import SingIn from '../sing-in/sing-in';
import SingOut from '../sing-out/sing-out';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active" href="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth ? <SingOut /> : <SingIn />}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
