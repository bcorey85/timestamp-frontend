import React from 'react';

import { Header } from './Header/Header';
import { Drawer } from './Drawer/Drawer';
import { Footer } from '../Layout/Footer/Footer';

import styles from './AppLayout.module.scss';

interface Props {
	children?: any;
}

const AppLayout = ({ children }: Props): JSX.Element => {
	return (
		<div className={styles.app_layout}>
			<Header />
			<div className={styles.main_container}>
				<Drawer />
				<main className={styles.main}>{children}</main>
			</div>

			<Footer />
		</div>
	);
};

export { AppLayout };
