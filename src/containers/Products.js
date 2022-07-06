// Imports
import React from "react";
import styled from "styled-components";
import ProductItem from "../components/ProductItem";
import { useProductContext } from "../context/products-context";

// Component
const Products = () => {

	// Context
	const { products } = useProductContext();

	// Return
	return(
		<Wrapper>
			{
				products.map((product) => {
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