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

interface SpacerProps {
	initial?: boolean;
}

const BreadCrumbSpacer = ({ initial }: SpacerProps) => {
	if (initial) {
		return <span className={styles.spacer}>... /</span>;
	}

	return <span className={styles.spacer}>/</span>;
};

const Breadcrumb = ({ links }: Props): JSX.Element => {
	const maxLength = 10;
	const maxLinks = 3;

	const overMaxLength = links.length > maxLinks;

	const linksArr = links.slice(Math.max(links.length - maxLinks, 0));

	const linkElements = linksArr.map((link, index) => {
		return (
			<li key={link.text}>
				<Link href={link.href}>
					<a>
						<TypeIcon type={link.iconType} />
						{link.text.length > maxLength ? (
							`${link.text.substring(0, maxLength)}...`
						) : (
							link.text
						)}
					</a>
				</Link>

				{index < linksArr.length - 1 ? <BreadCrumbSpacer /> : null}
			</li>
		);
	});

	return (
		<div className={styles.breadcrumb}>
			<nav>
				<ul>
					{overMaxLength && <BreadCrumbSpacer initial />}
					{linkElements}
				</ul>
			</nav>
		</div>
	);
};

export { Breadcrumb };
