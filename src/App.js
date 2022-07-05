// Imports
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Products from "./containers/Products";
import Favorites from "./containers/Favorites";

// Component
const App = () => {

	// Return
	return(
		<Router>
			<Navigation/>
			<main>
				<Route path="/" component={ Products } exact />
				<Route path="/favorites" component={ Favorites } />
			</main>
		</Router>
	);

};

// Export
export default App;