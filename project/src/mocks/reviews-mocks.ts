import Review from '../types/data-types/reviews-type';

export const reviewsMocks: Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Wed Jul 20 2022 21:37:53 GMT+0500 (GMT+05:00)',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: false,
      name: 'Oliver.conner'
    }
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Wed Jul 19 2022 20:37:53 GMT+0500 (GMT+05:00)',
    id: 2,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: true,
      name: 'Anatoly.conner'
    }
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Wed Jul 18 2022 19:37:53 GMT+0500 (GMT+05:00)',
    id: 3,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: false,
      name: 'Anton.conner'
    }
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Wed Jul 17 2022 18:37:53 GMT+0500 (GMT+05:00)',
    id: 4,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Vadim.conner'
    }
  },
];
