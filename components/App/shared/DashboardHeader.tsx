import React from 'react';

import styles from './DashboardHeader.module.scss';
import { IconType, TypeIcon } from './TypeIcon';

interface Props {
	heading: string;
	subheading: string;
	subheadingType?: IconType;
}

const DashboardHeader = ({
	heading,
	subheading,
	subheadingType
}: Props): JSX.Element => {
	return (
		<hgroup className={styles.container}>
			<h4>
				{subheadingType ? (
					<TypeIcon type={IconType[subheadingType]} />
				) : null}
				{subheading}
			</h4>
			<h1>{heading}</h1>
		</hgroup>
	);
};

export { DashboardHeader };
