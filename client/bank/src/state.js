import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const checkIsLogin = createAsyncThunk("auth/checkIsLogin", async () => {
  const response = await fetch("http://localhost:5174/auth", {
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
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkIsLogin.fulfilled, (state, action) => {
      const isValid = action.payload;
      if (!isValid) {
        state.user = null;
        state.token = null;
      }
    });
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export { checkIsLogin };

export default authSlice.reducer;
