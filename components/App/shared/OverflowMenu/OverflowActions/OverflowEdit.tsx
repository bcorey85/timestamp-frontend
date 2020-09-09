import React from 'react';
import { OverflowLink } from '../OverflowLink';
import { BiPencil } from 'react-icons/bi';

interface Props {
	children?: any;
	handleClick: (...args: any[]) => void;
}

const OverflowEdit = ({ children, handleClick }: Props): JSX.Element => {
	return (
		<OverflowLink handleClick={handleClick}>
			<BiPencil />
			{children}
		</OverflowLink>
	);
};

export { OverflowEdit };
