import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { time_tinterval } from "../../const";

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
  data: {
    price: 0,
  },
  time: {
    startTime: 0,
    endTime: 0,
    curTime: 0,
  }
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setInvalid: (state) => {
      state.dataState = 'invalid';
    },
    setAppTimeout: (state) => {
      state.dataState = 'timeout';
    },
    setCurTime: (state, action) => {
      state.time.curTime = action.payload;
    },
    setSuccess: (state) => {
      state.dataState = 'success';
    },
    setCancel: (state) => {
      state.dataState = 'cancel';
    }
  },
  extraReducers: builder => {
    builder
    .addCase(methodValidate.fulfilled, (state, action) => {
      state.dataState = 'valid';
      state.data = action.payload;

      state.time.startTime = Date.now();
      state.time.endTime = time_tinterval * 60 * 1000 + state.time.startTime;
      state.time.curTime = state.time.startTime;
    })
    .addCase(methodValidate.rejected, (state) => {
      state.dataState = 'invalid';
    });
  }
});

export const {
  setInvalid, 
  setCurTime, 
  setAppTimeout,
  setCancel,
  setSuccess,
} = appSlice.actions;
export const selectAppData = (state) => state.app.data;
export const selectAppDataState = (state) => state.app.dataState;
export const selectAppTime = (state) => state.app.time;
export default appSlice.reducer;