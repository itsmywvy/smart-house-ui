import {
  ActionReducerMapBuilder,
  // PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import axios from 'axios';
import { getJwtToken, setJwtToken } from '../../utils/auth';
import { RootState } from '../store';

interface IAuthValues {
  email: string;
  password: string | number;
  token?: string;
  user?: string[];
}

interface ISignupValues extends IAuthValues {
  firstName: string;
  lastName: string;
}

interface IAuthState {
  isLoading: boolean;
  userInfo: any;
  userToken: string | null;
  isError: string | null;
  isSuccess: boolean;
}

type LoginData = {
  success: boolean;
  token: string;
  user: any;
};

// const BASE_URL = 'https://backend-smart-house-production.up.railway.app/api';
const BASE_URL = 'http://localhost:3001/api';

export const authApi = createApi({
  reducerPath: 'api/auth',
  keepUnusedDataFor: 500,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.userToken;
      if (token) {
        // include token in req header
        // console.log(token);
        headers.set('authorization', `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => ({
        url: 'user/profile',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTION',
        },
      }),
    }),
    postMembersIds: builder.mutation({
      query: (body) => ({
        url: 'users',
        method: 'POST',
        body,
      }),
    }),
    updateAvatar: builder.mutation({
      query(file) {
        const formData = new FormData();
        formData.append('file', file);
        return {
          url: `user/avatar`,
          method: 'PUT',
          body: formData,
        };
      },
    }),
  }),
});

export const { useGetUserDetailsQuery, useUpdateAvatarMutation, usePostMembersIdsMutation } =
  authApi;

export const signupUser = createAsyncThunk(
  'auth/register',
  async ({ firstName, lastName, email, password }: ISignupValues, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTION',
        },
      };
      await axios.post(`${BASE_URL}/user/signup`, { firstName, lastName, email, password }, config);
    } catch (error: any) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data: IAuthValues): Promise<LoginData> => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Methods': 'GET, POST, OPTION',
        },
      };
      const { data: user } = await axios.post(`${BASE_URL}/user/login`, data, config);
      // store user's token in session storage
      setJwtToken(user.token);
      debugger;
      return user;
    } catch (error: any) {
      // // return custom error message from API if any
      // if (error.response && error.response.data.message) {
      //   return rejectWithValue(error.response.data.message);
      // } else {
      //   return rejectWithValue(error.message);
      // }

      throw error;
    }
  },
);

const userToken = getJwtToken() ? getJwtToken() : null;

const initialState: IAuthState = {
  isLoading: false,
  userInfo: null,
  userToken,
  isError: null,
  isSuccess: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      sessionStorage.removeItem('jwt'); // deletes token from storage
      state.isLoading = false;
      state.userInfo = null;
      state.userToken = null;
      state.isError = null;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    // register user
    builder.addCase(signupUser.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });

    // [signupUser.fulfilled.string]: (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = true; // registration successful
    // },
    // [signupUser.rejected]: (state) => {
    //   state.isLoading = false;
    //   state.isError = payload;
    // },

    // login user
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });

    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.userInfo = payload.user;
      state.userToken = payload.token;
    });

    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
    });

    // [loginUser.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.isError = payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

export default authSlice.reducer;
