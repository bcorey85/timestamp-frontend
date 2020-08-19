import React from 'react';
import Link from 'next/link';

import { TypeIcon } from '../TypeIcon';

import styles from './Breadcrumb.module.scss';

const Breadcrumb = (): JSX.Element => {
	return (
		<div className={styles.breadcrumb}>
			<nav>
				<ul>
					<li>
						<Link href='#'>
							<a>
								<TypeIcon type='generic' />Dashboard
							</a>
						</Link>
						<span className={styles.spacer}>/</span>
					</li>
					<li>
						<Link href='#'>
							<a>
								<TypeIcon type='project' />Project Title
							</a>
						</Link>
						<span className={styles.spacer}>/</span>
					</li>
					<li>
						<Link href='#'>
							<a>
								<TypeIcon type='task' />Task Title{' '}
							</a>
						</Link>
						<span className={styles.spacer}>/</span>
					</li>
					<li>
						<Link href='#'>
							<a>
								<TypeIcon type='note' />Note Title
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export { Breadcrumb };
