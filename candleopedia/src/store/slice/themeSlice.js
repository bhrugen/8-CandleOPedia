import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("bs-theme") || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("bs-theme", state.theme);
      document.body.setAttribute("data-bs-theme", state.theme);
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("bs-theme", state.theme);
      document.body.setAttribute("data-bs-theme", state.theme);
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
