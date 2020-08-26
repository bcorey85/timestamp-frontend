import React from 'react';

import Switch from 'react-switch';

import { useDarkModeToggle } from '../../../hooks/useDarkModeToggle';
import styles from './Interface.module.scss';

const Interface = (): JSX.Element => {
	const { darkModeChecked, handleDarkModeToggle } = useDarkModeToggle();

	return (
		<React.Fragment>
			<h2 className='section_heading'>Interface</h2>
			<div className={styles.dark_mode_toggle}>
				<button
					onClick={e => handleDarkModeToggle('light')}
					className={styles.dark_mode_btn}>
					Light Mode
				</button>
				<label>
					<Switch
						onChange={e => handleDarkModeToggle(null)}
						checked={darkModeChecked}
						offColor='#e4e7e6'
						onColor='#303634'
						onHandleColor='#078368'
						offHandleColor='#078368'
						height={24}
						handleDiameter={24}
						checkedIcon={false}
						uncheckedIcon={false}
					/>
				</label>
				<button
					onClick={e => handleDarkModeToggle('dark')}
					className={styles.dark_mode_btn}>
					Dark Mode
				</button>
			</div>
		</React.Fragment>
	);
};

export { Interface };
