import React from 'react';

import styles from './Button.module.scss';
import { LoadingSpinner } from './Loading/LoadingSpinner';

interface ButtonStyle {
	outline: 'outline';
	link_primary: 'link_primary';
	link_gray: 'link_gray';
	link_gray_small: 'link_gray_small';
	primary: 'primary';
	secondary: 'secondary';
	delete: 'delete';
}

interface Props {
	type?: 'button' | 'submit' | 'reset';
	children?: any;
	btnStyle: keyof ButtonStyle;
	onClick?: (props: any) => any;
	id?: string;
	isLoading?: boolean;
	style?: { [key: string]: string };
}

const Button = ({
	type,
	children,
	btnStyle,
	onClick,
	id,
	isLoading,
	style
}: Props): JSX.Element => {
	return (
		<button
			type={type || 'button'}
			className={styles[`btn_${btnStyle}`]}
			onClick={onClick}
			id={id}
			style={style}>
			{isLoading ? <LoadingSpinner /> : children}
		</button>
	);
};

export { Button };
