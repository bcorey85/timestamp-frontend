import React from 'react';
import Link from 'next/link';

import { NavToggle } from './NavToggle';
import { Breadcrumb } from './Breadcrumb';
import { IconType } from '../TypeIcon';
import { Search } from './Search';

import styles from './Header.module.scss';

const Header = (): JSX.Element => {
	const breadCrumbLinks = [
		{
			href: '#',
			iconType: IconType.project,
			text: 'Project Title'
		},
		{
			href: '#',
			iconType: IconType.task,
			text: 'Task Title'
		},
		{
			href: '#',
			iconType: IconType.note,
			text: 'Note Title'
		}
	];

	return (
		<header className={styles.header}>
			<div className={styles.nav_container}>
				<NavToggle />

				<Breadcrumb links={breadCrumbLinks} />
			</div>

			<Search />
		</header>
	);
};

export { Header };
