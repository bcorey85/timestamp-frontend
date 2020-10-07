import React from 'react';

import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
	return (
		<footer className={styles.footer}>
			<div>Copyright &copy; {new Date().getFullYear()}</div>
			<div>
				<img
					src='/images/bc-logo.svg'
					alt='Brandon Corey Web Development logo'
				/>
			</div>
		</footer>
	);
};

export { Footer };
