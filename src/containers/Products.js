// Imports
import React from "react";
import styled from "styled-components";
import ProductItem from "../components/ProductItem";
import { useStore } from "../hooks/store";

// Component
const Products = () => {

	// Custom hook store
	const [state, dispatch] = useStore();

	// Return
	return(
		<Wrapper>
			{
				state.products.map((product) => {
					return <ProductItem key={ product.id } { ...product }/>;
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
export default Products;