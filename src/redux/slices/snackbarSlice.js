import { createSlice } from "@reduxjs/toolkit";

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    open: false,
    type: "success",
    message: null,
  },
  reducers: {
    openSnackbar: (state, action) => {
      state.open = action.payload.open;
      state.open = action.payload.type;
      state.message = action.payload.message;
    },
    closeSnackbar: () => {
      return {
        open: false,
        type: "success",
        message: null,
      };
    },
  },
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
