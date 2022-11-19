import React from 'react';
import { Review } from '../../types/data-types/reviews-type';
import ReviewItem from '../review-item/review-item';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length.toString()}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={`${review.id}`.toString()} review={review}/>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ReviewsList;
