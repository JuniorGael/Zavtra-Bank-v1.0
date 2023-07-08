import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAdmin: false,
  token: null,
};

const checkIsLogin = createAsyncThunk("auth/checkIsLogin", async () => {
  const response = await fetch("/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (response.ok) {
    return true;
  } else {
    return false;
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.isAdmin = action.payload.isAdmin;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.isAdmin = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkIsLogin.fulfilled, (state, action) => {
      const isValid = action.payload;
      if (!isValid) {
        state.user = null;
        state.isAdmin = false;
        state.token = null;
      }
    });
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export { checkIsLogin };

export default authSlice.reducer;
