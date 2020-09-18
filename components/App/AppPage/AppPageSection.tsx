import React from 'react';

import styles from './AppPageSection.module.scss';

interface Props {
	children?: any;
	title?: string;
	full?: boolean;
}

const AppPageSection = ({ children, title, full }: Props): JSX.Element => {
	return (
		<section className={full ? styles.container_full : styles.container}>
			{title ? <h2 className='section_heading'>{title}</h2> : null}
			{children}
		</section>
	);
};

export { AppPageSection };
