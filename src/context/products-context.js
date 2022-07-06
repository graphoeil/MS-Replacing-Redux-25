// Imports
import React, { useContext, useState } from "react";

// Products
const productsList = [
	{ id:'p1', title:'Red scarf', description:'A pretty red scarf.', isFavorite:false },
	{ id:'p2', title:'Blue t-shirt', description:'A pretty blue t-shirt.', isFavorite:false },
	{ id:'p3', title:'Green trousers', description:'A pair of lightly green trousers.', isFavorite:false },
	{ id:'p4', title:'Orange hat', description:'Street style ! An orange hat.', isFavorite:false }
];

// Context
const ProductsContext = React.createContext();

// Provider
const ProductsProvider = ({ children }) => {

	// Variables
	const [products, setProducts] = useState(productsList);

	// Methods
	const toggleFav = (productID) => {
		setProducts((currentProdList) => {
			// Get index of the product
			const prodIndex = currentProdList.findIndex((product) => {
				return product.id === productID;
			});
			const newFavStatus = !currentProdList[prodIndex].isFavorite;
			const updatedProducts = [ ...currentProdList ];
			updatedProducts[prodIndex] = {
				...currentProdList[prodIndex], isFavorite:newFavStatus
			};
			return updatedProducts;
		});
	};

	// Return
	return <ProductsContext.Provider value={
		{ products, toggleFav }
	}>{ children }</ProductsContext.Provider>

};

// Custom hooks
export const useProductContext = () => {
	return useContext(ProductsContext);
};

// Provider export
export { ProductsProvider };