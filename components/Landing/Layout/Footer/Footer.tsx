import React from 'react';

import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
	return (
		<footer className={styles.footer}>
			<a href='https://www.bcdev.co'>
				<img
					src='/images/bc-logo.svg'
					alt='Brandon Corey Web Development logo'
				/>
			</a>
			<p>Copyright &copy; {new Date().getFullYear()}</p>
			<a href='https://www.bcdev.co'>
				<p>Brandon Corey Web Development</p>
			</a>
			<p>Built & Designed in KCMO</p>
		</footer>
	);
};

export { Footer };
