import React from 'react';

import Switch from 'react-switch';

import { useDarkModeToggle } from '../../../hooks/useDarkModeToggle';
import styles from './Interface.module.scss';

const Interface = (): JSX.Element => {
	const { darkModeChecked, handleDarkModeToggle } = useDarkModeToggle();

	return (
		<React.Fragment>
			<div className={styles.dark_mode_toggle}>
				<button
					id='light-mode-toggle'
					onClick={e => handleDarkModeToggle('light')}
					className={styles.dark_mode_btn}>
					Light Theme
				</button>
				<label>
					<Switch
						onChange={e => handleDarkModeToggle(null)}
						checked={darkModeChecked}
						offColor='#e4e7e6'
						onColor='#bcc2c1'
						onHandleColor='#078368'
						offHandleColor='#078368'
						height={24}
						handleDiameter={24}
						checkedIcon={false}
						uncheckedIcon={false}
					/>
				</label>
				<button
					id='dark-mode-toggle'
					onClick={e => handleDarkModeToggle('dark')}
					className={styles.dark_mode_btn}>
					Dark Theme
				</button>
			</div>
		</React.Fragment>
	);
};

export { Interface };
