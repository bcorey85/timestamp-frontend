import { useState } from 'react';

const useVisibilityFilter = () => {
	const [ selected, setSelected ] = useState('active');

	const handleSelect = (selection: string) => {
		setSelected(selection);
	};

	return {
		selected,
		handleSelect
	};
};

export { useVisibilityFilter };
