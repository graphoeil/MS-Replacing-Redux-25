// Imports
import React from "react";
import styled from "styled-components";
import { useStore } from "../hooks/store";

// Component
const FavoriteItem = ({ id, description, title, isFavorite }) => {

	// Custom hook store
	const [state, dispatch] = useStore();

	// Return
	return(
		<Wrapper className="card">
			<h2>{ title }</h2>
			<p>{ description }</p>
			<button className={ !isFavorite ? 'button-outline' : '' } onClick={ () => { dispatch('TOGGLE_FAV', id); } }>
				{ isFavorite ? 'Un-Favorite' : 'Favorite' }
			</button>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.div`
	margin-bottom: 1rem;
	h2{
		font-size: 1.15rem;
		margin: 0.25rem 0;
	}
	p{
		margin: 0.25rem 0;
	}
`;

// Export
export default FavoriteItem;