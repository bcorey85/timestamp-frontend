import React from 'react';

import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
	return (
		<footer className={styles.footer}>
			<p>Copyright &copy; {new Date().getFullYear()}</p>
			<p>Built & Designed in KCMO</p>
			<a href='https://www.bcdev.co'>
				<img
					src='/images/bc-logo.svg'
					alt='Brandon Corey Web Development logo'
				/>
			</a>
		</footer>
	);
};

export { Footer };
