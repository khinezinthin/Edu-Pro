import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};

export const navSlice = createSlice({
  name: "navSlice",
  initialState,
  reducers: {
    setScrollValueG: (state, { payload }) => {
      state.value = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setScrollValueG, setScrollHeightG } = navSlice.actions;

export default navSlice.reducer;
