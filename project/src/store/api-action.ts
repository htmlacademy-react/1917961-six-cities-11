import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { loadFavoriteOffers, loadNearOffers, loadOffers, loadProperty, loadReviews, requireAuthorization, setBookmark, setError, setOffersDataLoadingStatus, setPropertyDataLoadingStatus } from './action';
import {saveToken, dropToken} from '../services/token';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { Offer } from '../types/data-types/offer-type';
import { store } from './index';
import { Review } from '../types/data-types/reviews-type.js';
import { BookmarkData } from '../types/bookmark-data.js';
import { Comment } from '../types/data-types/reviews-type';

export const clearErrorAction = createAsyncThunk(
  'main/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Hotels);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    //dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Favorite);
    //dispatch(setDataLoadingStatus(false));
    dispatch(loadFavoriteOffers(data));
  },
);

export const fetchPropertyAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchProperty',
  async (id, {dispatch, extra: api}) => {
    if (id !== undefined) {
      dispatch(setPropertyDataLoadingStatus(true));
      try {
        const {data} = await api.get<Offer>(`${APIRoute.Hotels}/${id}`);
        dispatch(setPropertyDataLoadingStatus(false));
        dispatch(loadProperty(data));
      } catch {
        dispatch(setPropertyDataLoadingStatus(false));
        dispatch(loadProperty(null));
      }
    }
  },
);

export const fetchNearOffersAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (id, {dispatch, extra: api}) => {
    if (id !== undefined) {
      try {
        const {data} = await api.get<Offer[]>(`${APIRoute.Hotels}/${id}${APIRoute.Nearby}`);
        dispatch(loadNearOffers(data));
      }
      catch {
        dispatch(loadNearOffers([]));
      }
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (id, {dispatch, extra: api}) => {
    if (id !== undefined) {
      try {
        const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
        dispatch(loadReviews(data));
      }
      catch {
        dispatch(loadReviews([]));
      }
    }
  },
);

export const commentAction = createAsyncThunk<void, Comment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ hotelId, comment, rating}, {dispatch, extra: api}) => {
    await api.post<UserData>(`${APIRoute.Comments}/${hotelId}`, {comment, rating});
    dispatch(fetchReviewsAction(hotelId.toString()));
    //dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const fetchBookmarkAction = createAsyncThunk<void, BookmarkData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (bookmark, {dispatch, extra: api}) => {
    if (bookmark.hotelId !== undefined) {
      try {
        await api.post<Review[]>(`${APIRoute.Favorite}/${bookmark.hotelId}/${Number(bookmark.status)}`);
        dispatch(setBookmark(bookmark));
      }
      catch {
        dispatch(setBookmark(null));
      }
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
