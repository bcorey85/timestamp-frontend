import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkColorMode, selectInterface } from '../redux/interface';
import { UiService } from '../utils/UiService';

const useDarkModeToggle = () => {
	const { darkColorMode } = useSelector(selectInterface);
	const [ darkModeChecked, setDarkModeChecked ] = useState(darkColorMode);

	const dispatch = useDispatch();

	useEffect(() => {
		const appState = JSON.parse(localStorage.getItem('persist:timestamp'));

		if (appState) {
			const appInterface = JSON.parse(appState.interface);

			UiService.toggleDarkMode(appInterface.darkColorMode);
		}
	}, []);

	const handleDarkModeToggle = (mode: string | null) => {
		if (mode === 'light') {
			dispatch(setDarkColorMode({ darkColorMode: false }));
			return setDarkModeChecked(false);
		}

		if (mode === 'dark') {
			dispatch(setDarkColorMode({ darkColorMode: true }));
			return setDarkModeChecked(true);
		}

		dispatch(
			setDarkColorMode({
				darkColorMode: !darkModeChecked
			})
		);
		setDarkModeChecked(!darkModeChecked);
	};

	return { darkModeChecked, handleDarkModeToggle };
};

export { useDarkModeToggle };
