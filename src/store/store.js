import { configureStore } from "@reduxjs/toolkit"; // Importing the configureStore function from Redux Toolkit
import themeReducer from "./themeSlice"; // Importing the theme reducer to manage theme-related state

// Creating the Redux store and passing in the theme reducer
export const store = configureStore({
  reducer: {
    theme: themeReducer, // The "theme" slice of state will be managed by themeReducer
  },
});

// Exporting the store so it can be used in other parts of the app
export default store;

