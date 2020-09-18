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
				<h4>
					{subheadingType ? (
						<TypeIcon type={IconType[subheadingType]} />
					) : null}
					{subheading}
				</h4>
			</hgroup>

			<h1>{heading}</h1>
			<div>{children}</div>
		</div>
	);
};

export { AppPageTitle };
