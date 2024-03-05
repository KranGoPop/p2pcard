import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const methodValidate = createAsyncThunk(
  'app/validate',
  async ({hash}) => {
    await new Promise((res, rej) => setTimeout(() => res(), 2000));
    if (hash === 'aaa') {
      throw Response("Not Found", {status: 404});
    } else {
      return {
        price: 28350,
      };
    }
  }
);

const initialState = {
  dataState: 'unknown',
  data: {},
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setInvalid: (state) => {
      state.dataState = 'invalid';
    },
  },
  extraReducers: builder => {
    builder
    .addCase(methodValidate.fulfilled, (state, action) => {
      state.dataState = 'valid';
      state.data = action.payload;
    })
    .addCase(methodValidate.rejected, (state) => {
      state.dataState = 'invalid';
    });
  }
});

export const {setInvalid} = appSlice.actions;
export const selectAppData = (state) => state.app.data;
export const selectAppDateState = (state) => state.app.dataState;
export default appSlice.reducer;