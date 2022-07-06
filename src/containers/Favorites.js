// Imports
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FavoriteItem from "../components/FavoriteItem";
import { useProductContext } from "../context/products-context";

// Component
const Favorites = () => {

	// Context
	const { products } = useProductContext();

	// Favorites
	const [favorites, setFavorites] = useState([]);
	useEffect(() => {
		setFavorites(() => {
			return products.filter((product) => {
				return product.isFavorite;
			});
		});
	},[products]);

	// Returns
	if (!favorites || favorites.length <= 0){
		return <p className="placeholder">Got no favorites yet!</p>;
	}
	return(
		<Wrapper>
			{
				favorites.map((product) => {
					return <FavoriteItem key={ product.id } { ...product }/>;
				})
			}
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.ul`
	list-style: none;
	margin: 3rem;
	padding: 0;
`;

// Export
export default Favorites;