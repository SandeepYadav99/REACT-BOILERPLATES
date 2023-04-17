import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_KEYS } from '../../../app/helpers/constants';
import * as authServices from '../../services/auth/auth.services';
import { LoginPayload, LoginResponse } from '../../types/auth';

export const login = createAsyncThunk<LoginResponse, LoginPayload>('auth/login', async (payload: LoginPayload, thunkApi) => {
  try {
    const response = await authServices.login(payload);
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, response.data.accessToken);
    localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, response.data.refreshToken);
    return thunkApi.fulfillWithValue(response.data);
  } catch (err: any) {
    return thunkApi.rejectWithValue(err);
  }
});
interface ProfileObj {
  avatar: null;
  avatarId: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  phoneCode: string;
  phoneNumber: string;
  urn: string;
  gender: string;
}
// Define a type for the slice state
interface AuthState {
  loading: boolean;
  success: boolean;
  user: ProfileObj;
}

const profileInitialState = {
  avatar: null,
  avatarId: '',
  email: '',
  firstName: '',
  id: '',
  lastName: '',
  phoneCode: '',
  phoneNumber: '',
  urn: '',
  gender: '',
};

// Define the initial state using that type
const initialState: AuthState = {
  loading: false,
  success: false,
  user: { ...profileInitialState },
};

const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.pending, (state, action) => {
      // Add user to the state array
      state.loading = true;
      state.success = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = false;
      state.success = true;
      state.user = state.user;
    });
    builder.addCase(login.rejected, (state, action) => {
      // Add user to the state array
      state.loading = false;
      state.success = false;
    });
  },
});

export default authSlice.reducer;
