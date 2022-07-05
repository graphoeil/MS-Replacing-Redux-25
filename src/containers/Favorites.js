// Imports
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FavoriteItem from "../components/FavoriteItem";

// Component
const Favorites = () => {

	// Store
	const favorites = useSelector((store) => {
		return store.shop.products.filter((product) => {
			return product.isFavorite;
		});
	});

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