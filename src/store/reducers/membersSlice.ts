import { IMember } from './../../models/IMember';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { membersAPI } from '../../api/api';

export interface MemberState {
  data: IMember[];
  isFetching: boolean;
  error: string | null;
}

export const fetchMembers = createAsyncThunk('members/fetch', async (_, thunkAPI) => {
  try {
    const response = await membersAPI.getMembers();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
  }
});

const initialState: MemberState = {
  isFetching: false,
  error: '',
  data: [],
};

export const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMembers.pending, (state) => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(fetchMembers.fulfilled, (state, action: PayloadAction<IMember[]>) => {
      state.data.push(...action.payload);
      state.isFetching = false;
      state.error = '';
    });

    builder.addCase(fetchMembers.rejected, (state, action: PayloadAction<any>) => {
      // if (action.payload) state.error = action.payload.errorMessage;
      state.isFetching = false;
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { setData } = membersSlice.actions;

export default membersSlice.reducer;
