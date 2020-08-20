import React from 'react';
import Link from 'next/link';

import { TypeIcon, IconType } from '../TypeIcon';

import styles from './Breadcrumb.module.scss';

export interface BreadcrumbLink {
	iconType: IconType;
	href: string;
	text: string;
}

interface Props {
	links: BreadcrumbLink[];
}

const Breadcrumb = ({ links }: Props): JSX.Element => {
	const linkElements = links.map((link, index) => {
		return (
			<li>
				<Link href={link.href}>
					<a>
						<TypeIcon type={link.iconType} />
						{link.text}
					</a>
				</Link>

				{index < links.length - 1 ? (
					<span className={styles.spacer}>/</span>
				) : null}
			</li>
		);
	});

	return (
		<div className={styles.breadcrumb}>
			<nav>
				<ul>{linkElements}</ul>
			</nav>
		</div>
	);
};

export { Breadcrumb };
