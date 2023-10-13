const {
  createProductsThunk,
  deleteProductsThunk,
  getProductsThunk,
} = require('./thunk');

const arrThunks = [createProductsThunk, deleteProductsThunk, getProductsThunk];

export const handleRefactorFunctions = type =>
  arrThunks.map(func => func[type]);

export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

export const handleFulfilledGet = (state, { payload }) => {
  state.products = payload;
};

export const handleFulfilledCreate = (state, { payload }) => {
  state.products.push(payload);
};

export const handleFulfilledDelete = (state, { payload }) => {
  state.products = state.products.filter(product => product.id !== payload.id);
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
