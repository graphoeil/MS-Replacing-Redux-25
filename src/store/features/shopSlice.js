// Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
	products:[
		{ id:'p1', title:'Red scarf', description:'A pretty red scarf.', isFavorite:false },
		{ id:'p2', title:'Blue t-shirt', description:'A pretty blue t-shirt.', isFavorite:false },
		{ id:'p3', title:'Green trousers', description:'A pair of lightly green trousers.', isFavorite:false },
		{ id:'p4', title:'Orange hat', description:'Street style ! An orange hat.', isFavorite:false }
	]
};

// Slice
const shopSlice = createSlice({
	name:'shop',
	initialState,
	reducers:{
		// Toggle a product to favorite
		toggleFav:(state, action) => {
			// Get index of the product
			const prodIndex = state.products.findIndex((product) => {
				return product.id === action.payload;
			});
			// Toggle favorite, dont forget we use immer ,-)
			state.products[prodIndex].isFavorite = !state.products[prodIndex].isFavorite;
			// const newFavStatus = !state.products[prodIndex].isFavorite;
			// const updatedProducts = [ ...state.products ];
			// updatedProducts[prodIndex] = {
			// 	...state.products[prodIndex], isFavorite:newFavStatus
			// };
			// return {
			// 	...state, products:updatedProducts
			// };
		}
	}
});

// Actions export
export const { toggleFav } = shopSlice.actions;

// Reducer export
export default shopSlice.reducer;