import React from 'react';
import { OverflowLink } from '../OverflowLink';
import { BiTask } from 'react-icons/bi';

interface Props {
	handleClick: () => void;
}

const OverflowComplete = ({ handleClick }: Props): JSX.Element => {
	return (
		<OverflowLink handleClick={handleClick}>
			<BiTask />
			Complete
		</OverflowLink>
	);
};

export { OverflowComplete };
