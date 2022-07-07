// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Custom hook store
import configureStore from "./hooks/products-store";
// Initialize the store, then it'll be accessible from everywhere
configureStore();

// ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);