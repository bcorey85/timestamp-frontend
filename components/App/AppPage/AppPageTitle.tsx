import React from 'react';

import styles from './AppPageTitle.module.scss';
import { IconType, TypeIcon } from '../shared/TypeIcon';

interface Props {
	heading: string;
	subheading: string;
	subheadingType?: IconType;
	children?: any;
}

const AppPageTitle = ({
	heading,
	subheading,
	subheadingType,
	children
}: Props): JSX.Element => {
	return (
		<div className={styles.container}>
			<hgroup>
				<h2>
					{subheadingType ? (
						<TypeIcon type={IconType[subheadingType]} />
					) : null}
					{subheading}
				</h2>
			</hgroup>

			<h1>{heading}</h1>
			<div>{children}</div>
		</div>
	);
};

export { AppPageTitle };
