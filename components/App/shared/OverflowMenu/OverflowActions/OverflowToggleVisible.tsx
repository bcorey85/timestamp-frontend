import React from 'react';
import { OverflowLink } from '../OverflowLink';
import { OverflowHeader } from '../OverflowHeader';
import { BiCheck } from 'react-icons/bi';

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
			<OverflowHeader>Toggle Visible Items</OverflowHeader>
			<OverflowLink handleClick={() => handleClick('active')}>
				{selected === 'active' ? (
					<BiCheck style={{ color: 'var(--text500)' }} />
				) : (
					<BiCheck style={{ color: 'var(--background-primary)' }} />
				)}
				Active
			</OverflowLink>
			<OverflowLink handleClick={() => handleClick('complete')}>
				{selected === 'complete' ? (
					<BiCheck style={{ color: 'var(--text500)' }} />
				) : (
					<BiCheck style={{ color: 'var(--background-primary)' }} />
				)}
				Completed
			</OverflowLink>
		</React.Fragment>
	);
};

export { OverflowToggleVisible };
