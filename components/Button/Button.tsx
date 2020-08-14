import React from 'react';

import styles from './Button.module.scss';

interface Button {
	type: string;
	onClick: () => {};
}

const Button = ({ children, type, onClick }) => {
	if (type === 'outline') {
		return (
			<button className={styles.btn_outline} onClick={onClick}>
				{children}
			</button>
		);
	}

	if (type === 'link') {
		return (
			<button className={styles.btn_link} onClick={onClick}>
				{children}
			</button>
		);
	}

	return (
		<button className={styles.btn_primary} onClick={onClick}>
			{children}
		</button>
	);
};

export { Button };
