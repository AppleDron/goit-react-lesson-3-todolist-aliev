import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getNewsSearchThunk, getNewsThunk } from './thunk';
import { initialState } from './initialState';
// import { initialState } from 'redux/initialState';

// export const getNewsThunk = () => async dispatch => {
//   try {
//     dispatch(newsSlice.actions.fetching);
//     const data = await getTopNews();
//     dispatch(newsSlice.actions.fetchSuccess(data));
//   } catch (error) {
//     dispatch(newsSlice.actions.fetchError(error));
//   }
// };

const customArr = [getNewsSearchThunk, getNewsThunk];

const getStatus = status => {
  return customArr.map(el => el[status]);
};

const defaultStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const handlePending = state => {
  state.status = defaultStatus.pending;
};

const handleFulfilled = (state, { payload }) => {
  state.status = defaultStatus.fulfilled;
  state.news = payload.articles;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.status = defaultStatus.rejected;
  state.error = payload;
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  //   reducers: {
  //     fetching(state, { payload }) {
  //       state.status = 'pending';
  //     },
  //   fetchSuccess(state, { payload }) {
  //     state.status = 'fulfilled';
  //     state.news = payload.articles;
  //     state.error = null;
  //   },
  //   fetchError(state, { payload }) {
  //     state.status = 'rejected';
  //     state.error = payload;
  //   },
  // },
  //   extraReducers: {
  //   [getNewsThunk.pending](state, action) {
  //     state.status = 'pending';
  //   },
  //   [getNewsThunk.fulfilled](state, { payload }) {
  //     state.status = 'fulfilled';
  //     state.news = payload.articles;
  //     state.error = null;
  //   },
  //   [getNewsThunk.rejected](state, { payload }) {
  //     state.status = 'rejected';
  //     state.error = payload;
  //   },
  //   },
  extraReducers: builder => {
    builder
      //   .addCase(getNewsThunk.pending, handlePending)
      //   .addCase(getNewsThunk.fulfilled, handleFulfilled)
      //   .addCase(getNewsThunk.rejected, handleRejected)
      //   .addCase(getNewsSearchThunk.pending, handlePending)
      //   .addCase(getNewsSearchThunk, handleFulfilled)
      //   .addCase(getNewsSearchThunk, handleRejected)
      .addMatcher(isAnyOf(...getStatus(defaultStatus.pending)), handlePending)
      .addMatcher(
        isAnyOf(...getStatus(defaultStatus.fulfilled)),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(...getStatus(defaultStatus.rejected)),
        handleRejected
      );
  },
});

export const newsReducer = newsSlice.reducer;
