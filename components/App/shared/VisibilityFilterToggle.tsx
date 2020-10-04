import React from 'react';
import { BiCheck, BiNotepad, BiTask } from 'react-icons/bi';

import styles from './VisibilityFilterToggle.module.scss';

interface Props {
	selected: 'active' | 'completed';
	handleClick: (selection: 'active' | 'completed') => void;
}

const VisibilityFilterToggle = ({
	selected,
	handleClick
}: Props): JSX.Element => {
	return (
		<div className={styles.container}>
			<div className={styles.btn_container}>
				<button
					className={
						selected === 'active' ? styles.btn_selected : styles.btn
					}
					onClick={() => handleClick('active')}>
					Active
				</button>
				<button
					className={
						selected === 'completed' ? (
							styles.btn_selected
						) : (
							styles.btn
						)
					}
					onClick={() => handleClick('completed')}>
					Completed
				</button>
			</div>
		</div>
	);
};

export { VisibilityFilterToggle };
