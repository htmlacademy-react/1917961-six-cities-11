import { Offer } from '../../types/data-types/offer-type';

type InsideProps = {
  offer: Offer;
}

function Inside({offer}: InsideProps): JSX.Element {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {offer.goods.map((good) => (
          <li key={`${offer.id}-${good.replace(/\s/g, '')}`.toString()} className="property__inside-item">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inside;
