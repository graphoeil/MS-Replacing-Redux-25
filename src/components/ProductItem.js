// Imports
import React from "react";
import styled from "styled-components";
import { useStore } from "../hooks/store";

// Component
const ProductItem = React.memo(({ id, title, description, isFavorite }) => {

	// DEV
	// On component mount will render all components, but when 
	// click on one favorite will also render all components !!!
	// because in custom hook we use useState for every instance
	// so we add a params shouldUdpate in the store.js file
	console.log('Rendering');

	// Custom hook store
	// shouldUpdate to false for prevent multiples re-rendering 
	// of all components when other component change, 
	// we must so use React.memo()
	const dispatch = useStore(false)[1];

	// Return
	return(
		<Wrapper className="card">
			<h2 className={ isFavorite ? 'is-fav' : '' }>{ title }</h2>
			<p>{ description }</p>
			<button className={ !isFavorite ? 'button-outline' : '' } onClick={ () => { dispatch('TOGGLE_FAV', id); } }>
				{ isFavorite ? 'Un-Favorite' : 'Favorite' }
			</button>
		</Wrapper>
	);

});

// Styled
const Wrapper = styled.div`
	margin-bottom: 1rem;
	h2{
		font-size: 1.15rem;
		margin: 0.25rem 0;
		&.isFav{
			color: #ff2058;
		}
	}
	p{
		margin: 0.25rem 0;
	}
`;

// Export
export default ProductItem;