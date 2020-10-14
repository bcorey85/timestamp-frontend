import React from 'react';
import Link from 'next/link';

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
	href?: string;
	as?: string;
	link?: boolean;
}

const Button = ({
	type,
	children,
	btnStyle,
	onClick,
	id,
	isLoading,
	style,
	href,
	as,
	link
}: Props): JSX.Element => {
	if (link) {
		return (
			<Link href={href} as={as}>
				<a className={styles[`btn_${btnStyle}`]} id={id} style={style}>
					{children}
				</a>
			</Link>
		);
	}

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
