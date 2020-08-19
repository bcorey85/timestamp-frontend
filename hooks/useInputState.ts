import { useState, SyntheticEvent } from 'react';

const useInputState = (initialState: any) => {
	const [ state, setState ] = useState(initialState);

	const handleState = (e: React.ChangeEvent<HTMLInputElement>) => {
		setState(e.target.value);
	};

	return [ state, handleState ];
};

export { useInputState };
