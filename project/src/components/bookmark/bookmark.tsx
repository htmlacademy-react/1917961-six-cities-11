import { BookmarkAttributes } from '../../types/tags-attributes-types';

type BookmarkProps = {
  isFavorite: boolean;
  bookmarkAttributes: BookmarkAttributes;
}

function Bookmark({isFavorite, bookmarkAttributes}: BookmarkProps): JSX.Element {
  return (
    <button className={`button ${bookmarkAttributes.className} ${isFavorite ? bookmarkAttributes.classNameToActiv : ''}`} type="button">
      <svg className="place-card__bookmark-icon" width={bookmarkAttributes.width} height={bookmarkAttributes.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default Bookmark;
