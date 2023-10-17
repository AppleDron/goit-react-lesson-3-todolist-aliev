import { getProfileThunk, loginThunk } from './authThunk';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

export const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = true;
  state.error = '';
  state.token = action.payload.access_token;
};

const handleRejected = (state, action) => {
  state.isLoading = true;
  state.error = action.payload;
};

const handleFulfilledGetProfile = (state, action) => {
  state.isLoading = false;
  state.error = '';
  state.profile = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    isLoading: false,
    error: '',
    profile: null,
  },
  reducers: {
    logOut(state) {
      state.profile = null;
      state.token = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(loginThunk.rejected, handleRejected)
      .addCase(getProfileThunk.fulfilled, handleFulfilledGetProfile)
      .addMatcher(
        isAnyOf(loginThunk.pending, getProfileThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(loginThunk.rejected, getProfileThunk.rejected),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
