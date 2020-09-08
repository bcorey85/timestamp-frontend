import React from 'react';
import { OverflowLink } from '../OverflowLink';
import { BiShare } from 'react-icons/bi';

interface Props {
	children?: any;
	handleClick: () => void;
}

const OverflowMove = ({ children, handleClick }: Props): JSX.Element => {
	return (
		<OverflowLink handleClick={handleClick}>
			<BiShare />
			{children}
		</OverflowLink>
	);
};

export { OverflowMove };
