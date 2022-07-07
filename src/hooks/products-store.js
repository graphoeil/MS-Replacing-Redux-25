// Imports
import React from "react";
import { initStore } from "./store";

// Products
const productsList = [
	{ id:'p1', title:'Red scarf', description:'A pretty red scarf.', isFavorite:false },
	{ id:'p2', title:'Blue t-shirt', description:'A pretty blue t-shirt.', isFavorite:false },
	{ id:'p3', title:'Green trousers', description:'A pair of lightly green trousers.', isFavorite:false },
	{ id:'p4', title:'Orange hat', description:'Street style ! An orange hat.', isFavorite:false }
];

// Configure the store
const configureStore = () => {

	// Set up actions and initial state
	const actions = {
		TOGGLE_FAV:(currentState, productID) => {
			// Get index of the product
			const prodIndex = currentState.products.findIndex((product) => {
				return product.id === productID;
			});
			const newFavStatus = !currentState.products[prodIndex].isFavorite;
			const updatedProducts = [ ...currentState.products ];
			updatedProducts[prodIndex] = {
				...currentState.products[prodIndex], isFavorite:newFavStatus
			};
			// Return
			return {
				products:updatedProducts
			};
		}
	};
	initStore(actions, { products:productsList });

};

// Export
export default configureStore;