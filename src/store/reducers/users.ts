import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';

interface UserState {
  firstname: string | null;
  lastname: string | null;
  email: string;
  password: string;
  dateofbirth: string;
  address: string;
  photo: string;
  phone_number: string;
  student: boolean;
  isLogged: boolean;
  error: string | undefined;
}

export const initialState: UserState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  dateofbirth: '',
  address: '',
  photo: '',
  phone_number: '',
  student: false,
  isLogged: false,
  error: '',
};

export const loggin = createAsyncThunk(
  'user/loggin',
  async ({ email, password }: { email: string; password: string }) => {
    const bodyData = {
      email,
      password,
    };
    const { data } = await backEndAPI.post('login', bodyData);
  }
);

export const loggout = createAction('user/loggout');

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(loggin, (state) => {});
});

export default userReducer;
