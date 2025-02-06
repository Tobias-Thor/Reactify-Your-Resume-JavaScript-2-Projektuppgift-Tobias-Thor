import { createSlice } from "@reduxjs/toolkit"; // Importing the createSlice function from Redux Toolkit

// Defining the initial state for the theme, with darkMode set to false by default
const initialState = {
  darkMode: false,
};

// Creating the theme-slice using createSlice, which automatically generates actions and reducers
const themeSlice = createSlice({
  name: "theme", // Name of the slice 
  initialState, // The initial state defined above
  reducers: {
    // A reducer function to toggle the darkMode state between true and false
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode; // Toggle darkMode 
    },
  },
});

// Exporting the toggleTheme action to use it in other parts of the app
export const { toggleTheme } = themeSlice.actions;

// Exporting the reducer to be used in the Redux store
export default themeSlice.reducer;
