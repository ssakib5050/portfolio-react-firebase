import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    value: true,
  },
  reducers: {
    sidebarOn: (state) => {
      state.value = true;
    },
    sidebarOff: (state) => {
      state.value = false;
    },
    sidebarToggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { sidebarOn, sidebarOff, sidebarToggle } = sidebarSlice.actions;

export default sidebarSlice.reducer;
