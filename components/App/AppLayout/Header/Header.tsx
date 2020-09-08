import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { NavToggle } from './NavToggle';
import { Search } from './Search';
import { IconType } from '../../shared/TypeIcon';

import { selectUser } from '../../../../redux/user';
import styles from './Header.module.scss';
import { Breadcrumb } from '../Breadcrumb';

const Header = (): JSX.Element => {
	const { userId } = useSelector(selectUser);

	const [ breadcrumbLinks, setBreadcrumLinks ] = useState([
		{
			iconType: IconType.project,
			href: `/app/${userId}/projects`,
			text: 'Project'
		},
		{
			iconType: IconType.task,
			href: `/app/${userId}/projects`,
			text: 'Task'
		},
		{
			iconType: IconType.note,
			href: `/app/${userId}/projects`,
			text: 'Note'
		}
	]);

	return (
		<header className={styles.header}>
			<div className={styles.nav_container}>
				<NavToggle />
				<Link
					href='/app/[userId]/projects'
					as={`/app/${userId}/projects`}>
					<img src='/images/logo-temp.svg' />
				</Link>
			</div>
			<Breadcrumb links={breadcrumbLinks} />
		</header>
	);
};

export { Header };
