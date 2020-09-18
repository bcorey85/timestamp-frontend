import React from 'react';

import styles from './Button.module.scss';

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
	children?: any;
	btnStyle: keyof ButtonStyle;
	onClick: (props: any) => any;
	id?: string;
}

const Button = ({ children, btnStyle, onClick, id }: Props): JSX.Element => {
	return (
		<button className={styles[`btn_${btnStyle}`]} onClick={onClick} id={id}>
			{children}
		</button>
	);
};

export { Button };
