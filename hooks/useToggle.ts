import React, { useState } from 'react';

const useToggle = (initialState: boolean = false): [boolean, () => void] => {
	const [ state, setState ] = useState(initialState);

	const toggleState = () => {
		setState(!state);
	};

	return [ state, toggleState ];
};

export { useToggle };
