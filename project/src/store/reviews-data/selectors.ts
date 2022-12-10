import { NameSpace } from '../../const';
import { Review } from '../../types/data-types/reviews-type';
import { State } from '../../types/state';

export const getReviewsData = (state: State): Review[] => state[NameSpace.ReviewsData].reviews;
