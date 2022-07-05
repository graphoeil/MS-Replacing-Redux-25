// Imports
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Component
const Navigation = () => {

	// Return
	return(
		<Wrapper>
			<nav>
				<ul>
					<li>
						<NavLink to="/" exact>All Products</NavLink>
					</li>
					<li>
						<NavLink to="/favorites">Favorites</NavLink>
					</li>
				</ul>
			</nav>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.header`
	height: 3.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ff2058;
	nav{
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		ul{
			list-style: none;
			margin: 0;
			padding: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			li{
				padding: 0;
				margin: 0 2rem;
				a{
					text-decoration: none;
					color: white;
					font-weight: bold;
					&:hover, &:active, &.active{
						color: #f6e58d;
					}
				}
			}
		}
	}
`;

// Export
export default Navigation;