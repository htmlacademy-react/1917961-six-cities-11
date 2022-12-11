import {useAppDispatch} from '../../hooks';
import { fetchOffersAction } from '../../store/api-action';

function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="page page--main">
      <main className="page__main page__main--index">
        <div className="container">
          <div>
            <h1>Failed to load offers.</h1>
          </div>
          <div>
            <button onClick={() => {dispatch(fetchOffersAction());}} className="replay replay--error" type="button">
              To try one more time
            </button>
          </div>
        </div>
      </main>
    </div>

  );
}

export default ErrorScreen;
