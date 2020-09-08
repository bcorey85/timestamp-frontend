import React from 'react';
import { OverflowLink } from '../OverflowLink';
import { BiTrash } from 'react-icons/bi';

interface Props {
	children?: any;
	handleClick: () => void;
}

const OverflowDelete = ({ children, handleClick }: Props): JSX.Element => {
	return (
		<OverflowLink handleClick={handleClick}>
			<BiTrash />
			{children}
		</OverflowLink>
	);
};

export { OverflowDelete };
