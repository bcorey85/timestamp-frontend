import React from 'react';
import { OverflowLink } from '../OverflowLink';
import { OverflowHeader } from '../OverflowHeader';
import { BiCheck, BiCaretRight } from 'react-icons/bi';

interface Props {
	handleClick: (selected: string) => void;
	selected: string;
}

const OverflowToggleVisible = ({
	handleClick,
	selected
}: Props): JSX.Element => {
	return (
		<React.Fragment>
			<OverflowHeader>Visible Items</OverflowHeader>
			<OverflowLink handleClick={() => handleClick('active')}>
				{selected === 'active' ? (
					<BiCaretRight style={{ color: 'var(--text500)' }} />
				) : (
					<BiCaretRight style={{ color: 'transparent' }} />
				)}
				Active
			</OverflowLink>
			<OverflowLink handleClick={() => handleClick('complete')}>
				{selected === 'complete' ? (
					<BiCaretRight style={{ color: 'var(--text500)' }} />
				) : (
					<BiCaretRight style={{ color: 'transparent' }} />
				)}
				Completed
			</OverflowLink>
		</React.Fragment>
	);
};

export { OverflowToggleVisible };
