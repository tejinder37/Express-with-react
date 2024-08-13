import { createSlice } from '@reduxjs/toolkit';

const loadAuthState = () => {
  try {
    const serializedAuth = localStorage.getItem('auth');
    if (serializedAuth === null) {
      return undefined;
    }
    return JSON.parse(serializedAuth);
  } catch (err) {
    return undefined;
  }
};

const saveAuthState = (state) => {
  try {
    const serializedAuth = JSON.stringify(state);
    localStorage.setItem('auth', serializedAuth);
  } catch (err) {
    // Handle write errors
  }
};

const initialState = loadAuthState() || {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      saveAuthState(state);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('auth');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;