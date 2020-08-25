import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkColorMode, selectInterface } from '../redux/interface';

const useDarkModeToggle = () => {
	const { darkColorMode } = useSelector(selectInterface);
	const [ darkModeChecked, setDarkModeChecked ] = useState(darkColorMode);
	const dispatch = useDispatch();

	const handleDarkModeToggle = (mode: string | null) => {
		if (mode === 'light') {
			dispatch(setDarkColorMode({ darkColorMode: false }));
			return setDarkModeChecked(false);
		}

		if (mode === 'dark') {
			dispatch(setDarkColorMode({ darkColorMode: true }));
			return setDarkModeChecked(true);
		}

		dispatch(setDarkColorMode({ darkColorMode: !darkModeChecked }));
		setDarkModeChecked(!darkModeChecked);
	};

	return { darkModeChecked, handleDarkModeToggle };
};

export { useDarkModeToggle };
