import React, { SyntheticEvent } from 'react';

import styles from './Button.module.scss';

interface ButtonType {
	outline: 'outline';
	link_primary: 'link_primary';
	link_gray: 'link_gray';
	primary: 'primary';
}

interface Props {
	children?: any;
	type: keyof ButtonType;
	onClick: (props: any) => any;
}

const Button = ({ children, type, onClick }: Props): JSX.Element => {
	if (type === 'outline') {
		return (
			<button className={styles.btn_outline} onClick={onClick}>
				{children}
			</button>
		);
	}

	if (type === 'link_primary') {
		return (
			<button className={styles.btn_link_primary} onClick={onClick}>
				{children}
			</button>
		);
	}

	if (type === 'link_gray') {
		return (
			<button className={styles.btn_link_gray} onClick={onClick}>
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
