// Imports
import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./features/shopSlice";

// Store
const store = configureStore({
	reducer:{
		shop:shopSlice
	}
});

// Export
export default store;