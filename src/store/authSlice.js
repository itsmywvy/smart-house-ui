import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';


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
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://60d6d2aa307c300017a5f50c.mockapi.io/api/1' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
  endpoints: (builder) => ({
    getMembers: builder.query<Array<IMember>, void>({
      query: () => 'members',
      keepUnusedDataFor: 300,
    }),
    getOneMember: builder.query<IMember, void>({
      query: (id) => `members/${id}`,
    }),
    addMember: builder.mutation({
      query(body) {
        return {
          url: 'members',
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body,
        };
      },
    }),
  }),
});

export const { useGetMembersQuery, useAddMemberMutation } = membersDataApi;

const initialState: MemberState = {
  isFetching: false,
  error: '',
  data: [],
};

export const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { setData } = membersSlice.actions;

export default authSlice.reducer;
