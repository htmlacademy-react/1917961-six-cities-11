import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchBookmarkAction } from '../../store/api-action';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { BookmarkData } from '../../types/bookmark-data';
import { Offer } from '../../types/data-types/offer-type';
import { BookmarkAttributes } from '../../types/tags-attributes-types';

type BookmarkProps = {
  offer: Offer;
  bookmarkAttributes: BookmarkAttributes;
}

function Bookmark({offer, bookmarkAttributes}: BookmarkProps): JSX.Element {
  const bookmarkData: BookmarkData = {
    hotelId: offer.id,
    status: offer.isFavorite
  };
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const navigate = useNavigate();

  function onBookmarkhandler():void {
    if(authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    } else {
      bookmarkData.status = !bookmarkData.status;
      store.dispatch(fetchBookmarkAction(bookmarkData));
    }
  }

  return (
    <button onClick={onBookmarkhandler} className={`button ${bookmarkAttributes.className} ${offer.isFavorite ? bookmarkAttributes.classNameToActiv : ''}`} type="button">
      <svg className="place-card__bookmark-icon" width={bookmarkAttributes.width} height={bookmarkAttributes.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default Bookmark;
