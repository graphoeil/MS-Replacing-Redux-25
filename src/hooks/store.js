// Imports
import React, { useState, useEffect } from "react";

// Global state
let globalState = {};

// Listen to changes in the state
let listeners = [];

// Actions to dispatch
let actions = {};

// Custom store hook
export const useStore = () => {

	// useState trigger re-rendering !!!
	// As a custom hook we only interested with setState
	const setState = useState(globalState)[1];

	// Dispatch actions to modify the state
	const dispatch = (actionID, payload) => {
		// Call the actions methods with actionID
		const newState = actions[actionID](globalState, payload);
		// Update the state
		globalState = { ...globalState, ...newState };
		// We attribute this globalState to it's listener (closure)!!!
		for (const listener of listeners){
			listener(globalState);
		}
	};

	// Only run when the component that use custom hook is mount
	useEffect(() => {
		// Every components which use this custom hook
		// will get is own setState
		listeners.push(setState);
		// Clean on unmount
		return () => {
			listeners = listeners.filter((listener) => {
				// We keep all listener that doesn't equal to THIS setState component
				// Because it's a closure setState refers only to THIS component ,-)
				return listener !== setState;
			});
		}
	},[]);
	
	// Return of custom hook
	return [globalState, dispatch];

};

// Let user modify globalState and actions
export const initStore = (userActions, initialState) => {
	if (initialState){
		globalState = { ...globalState, ...initialState };
	}
	actions = { ...actions, ...userActions };
};