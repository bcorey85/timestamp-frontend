import React from 'react';
import { OverflowLink } from '../OverflowLink';
import { BiClipboard, BiTask } from 'react-icons/bi';

interface Props {
	handleClick: () => void;
	completed: boolean;
}

const OverflowComplete = ({ handleClick, completed }: Props): JSX.Element => {
	return (
		<OverflowLink handleClick={handleClick}>
			{completed ? <BiClipboard /> : <BiTask />}
			{completed ? 'Activate' : 'Complete'}
		</OverflowLink>
	);
};

export { OverflowComplete };
