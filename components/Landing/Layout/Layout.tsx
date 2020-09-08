import React from 'react';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

import styles from './Layout.module.scss';

interface Props {
	children?: any;
}

const Layout = ({ children }: Props): JSX.Element => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
};

export { Layout };
