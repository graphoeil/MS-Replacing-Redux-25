// Imports
import React from "react";
import styled from "styled-components";
import { useProductContext } from "../context/products-context";

// Component
const ProductItem = ({ id, title, description, isFavorite }) => {

	// Context
	const { toggleFav } = useProductContext();

	// Return
	return(
		<Wrapper className="card">
			<h2 className={ isFavorite ? 'is-fav' : '' }>{ title }</h2>
			<p>{ description }</p>
			<button className={ !isFavorite ? 'button-outline' : '' } onClick={ () => { toggleFav(id); } }>
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