import React from 'react';

import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
	return (
		<footer className={styles.footer}>
			<div>Copyright &copy; {new Date().getFullYear()}</div>
			<div>Brandon Corey Web Development</div>
		</footer>
	);
};

export { Footer };
