// Imports
import { useState, useEffect } from "react";

// These 3 variables are accessible from everywhere 
// as global data since they're out of the hook useStore
// Global state
let globalState = {};
// Listen to changes in the state
let listeners = [];
// Actions to dispatch
let actions = {};

// Custom store hook
// shouldUpdate true on first mounting or when his state change 
// for each component that use useStore
export const useStore = (shouldUpdate = true) => {

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
		if (shouldUpdate){
			// Every components which use this custom hook
			// will get is own setState
			listeners.push(setState);
		}
		// Clean on unmount
		return () => {
			if (shouldUpdate){
				listeners = listeners.filter((listener) => {
					// We keep all listener that doesn't equal to THIS setState component
					// Because it's a closure setState refers only to THIS component ,-)
					return listener !== setState;
				});
			}
		}
	},[setState, shouldUpdate]);
	
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