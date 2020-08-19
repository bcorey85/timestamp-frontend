import React from 'react';

import styles from './Button.module.scss';

interface ButtonStyle {
	outline: 'outline';
	link_primary: 'link_primary';
	link_gray: 'link_gray';
	primary: 'primary';
}

interface Props {
	children?: any;
	btnStyle: keyof ButtonStyle;
	onClick: (props: any) => any;
	id?: string;
}

const Button = ({ children, btnStyle, onClick, id }: Props): JSX.Element => {
	if (btnStyle === 'outline') {
		return (
			<button className={styles.btn_outline} onClick={onClick} id={id}>
				{children}
			</button>
		);
	}

	if (btnStyle === 'link_primary') {
		return (
			<button
				className={styles.btn_link_primary}
				onClick={onClick}
				id={id}>
				{children}
			</button>
		);
	}

	if (btnStyle === 'link_gray') {
		return (
			<button className={styles.btn_link_gray} onClick={onClick} id={id}>
				{children}
			</button>
		);
	}

	return (
		<button className={styles.btn_primary} onClick={onClick} id={id}>
			{children}
		</button>
	);
};

export { Button };
