// Imports
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FavoriteItem from "../components/FavoriteItem";
import { useStore } from "../hooks/store";

// Component
const Favorites = () => {

	// Custom hook store
	const state = useStore()[0];

	// Favorites
	const [favorites, setFavorites] = useState([]);
	useEffect(() => {
		setFavorites(() => {
			return state.products.filter((product) => {
				return product.isFavorite;
			});
		});
	},[state.products]);

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