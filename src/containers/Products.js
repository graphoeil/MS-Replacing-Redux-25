// Imports
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ProductItem from "../components/ProductItem";

// Component
const Products = () => {

	// Store
	const { products } = useSelector((store) => { return store.shop });

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