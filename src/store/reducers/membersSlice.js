import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export interface MemberState {
  data: IMember[];
  isFetching: boolean;
  error: string | null;
}

export interface IMember {
  firstName: string;
  lastName: string;
  avatar: object;
  membership: string;
  homeStatus: boolean;
  homeLocation: string;
  _id: string;
}

// export const fetchMembers = createAsyncThunk('members/fetch', async (_, thunkAPI) => {
//   try {
//     const response = await membersAPI.getMembers();
//     return response;
//   } catch (error) {
//     return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
//   }
// });

export const membersDataApi = createApi({
  reducerPath: 'api/members',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://backend-smart-house-production.up.railway.app/api',
    baseUrl: 'http://localhost:3001/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken;
      if (token) {
        // include token in req header
        headers.set('Authorization', `Bearer ${token}`);
        return headers;
      }
    },
  }),

  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users',
      keepUnusedDataFor: 300,
    }),
    getOneUser: builder.query({
      query: (id) => `users/${id}`,
    }),
    findUser: builder.query({
      query: (body) => `user?search=${body}`,
    }),
    addMember: builder.mutation({
      query(member) {
        return {
          url: `user/members`,
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: { ...member },
        };
      },
    }),
  }),
});

export const { useGetUsersQuery, useFindUserQuery, useAddMemberMutation } = membersDataApi;

const initialState: MemberState = {
  isFetching: false,
  error: '',
  data: [],
};

export const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    getMembers(state, { payload }) {
      state.data = [...payload];
    },
  },
  // extraReducers: (builder) => {
  //   // builder.addCase(fetchMembers.pending, (state) => {
  //   //   state.isFetching = true;
  //   //   state.error = null;
  //   // });
  //   // builder.addCase(fetchMembers.fulfilled, (state, action: PayloadAction<IMember[]>) => {
  //   //   state.data.push(...action.payload);
  //   //   state.isFetching = false;
  //   //   state.error = '';
  //   // });
  //   // builder.addCase(fetchMembers.rejected, (state, action: PayloadAction<any>) => {
  //   //   // if (action.payload) state.error = action.payload.errorMessage;
  //   //   state.isFetching = false;
  //   //   state.error = action.payload;
  //   // });
  // },
});

// Action creators are generated for each case reducer function
export const { getMembers } = membersSlice.actions;

export default membersSlice.reducer;
