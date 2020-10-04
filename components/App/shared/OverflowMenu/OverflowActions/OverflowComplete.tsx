import React from 'react';
import { OverflowLink } from '../OverflowLink';
import { BiNotepad, BiTask } from 'react-icons/bi';

interface Props {
	handleClick: () => void;
	completed: boolean;
}

const OverflowComplete = ({ handleClick, completed }: Props): JSX.Element => {
	return (
		<OverflowLink handleClick={handleClick}>
			{completed ? <BiNotepad /> : <BiTask />}
			{completed ? 'Activate' : 'Complete'}
		</OverflowLink>
	);
};

export { OverflowComplete };
