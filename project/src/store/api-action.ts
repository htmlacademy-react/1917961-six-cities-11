import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
//import { setError } from './app-process/app-process';
import {saveToken, dropToken} from '../services/token';
import { APIRoute, AppRoute } from '../const';
import { Offer } from '../types/data-types/offer-type';
//import { store } from './index';
import { BookmarkData } from '../types/bookmark-data.js';
import { UserData } from '../types/user-data.js';
import { AuthData } from '../types/auth-data.js';
import { Review, Comment } from '../types/data-types/reviews-type.js';
import { redirectToRoute } from './action';


export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Hotels);
    return data;
  },
);

export const fetchFavoritesAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  },
);

export const fetchPropertyAction = createAsyncThunk<Offer | null, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchProperty',
  async (id, {dispatch, extra: api}) => {
    if (id !== undefined) {
      const {data} = await api.get<Offer>(`${APIRoute.Hotels}/${id}`);
      return data;
    }
    return null;
  },
);

export const fetchNearOffersAction = createAsyncThunk<Offer[], string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (id, {dispatch, extra: api}) => {
    if (id !== undefined) {
      const {data} = await api.get<Offer[]>(`${APIRoute.Hotels}/${id}${APIRoute.Nearby}`);
      return data;
    }
    return [];
  },
);

export const fetchReviewsAction = createAsyncThunk<Review[], string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (id, {dispatch, extra: api}) => {
    if (id !== undefined) {
      const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
      return data;
    }
    return [];
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
  },
);

export const fetchBookmarkAction = createAsyncThunk<BookmarkData | null, BookmarkData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (bookmark, {dispatch, extra: api}) => {
    if (bookmark.hotelId !== undefined) {
      await api.post<Review[]>(`${APIRoute.Favorite}/${bookmark.hotelId}/${Number(bookmark.status)}`);
      return bookmark;
    }
    return null;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
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
    //const { data } = await api.get<UserData>(APIRoute.Login);
    //dispatch(loadAuthInfo({ authInfo: data }));
    dispatch(redirectToRoute(AppRoute.Main));
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
  },
);
