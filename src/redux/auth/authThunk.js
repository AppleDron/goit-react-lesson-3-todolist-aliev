import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, login } from 'services/auth-services/auth-service';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async body => await login(body)
);

export const getProfileThunk = createAsyncThunk(
  'auth/profile',
  async body => await getProfile()
);
