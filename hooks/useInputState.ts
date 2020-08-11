import { useState } from 'react';

const useInputState = initialState => {
	const [ state, setState ] = useState(initialState);

	const handleState = e => {
		setState(e.target.value);
	};

	return [ state, handleState ];
};

export { useInputState };
