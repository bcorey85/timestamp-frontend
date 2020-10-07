import React from 'react';

import { Hero } from './Hero';
import { Benefits } from './Benefits';
import { Features } from './Features';
import { Signup } from './Signup';

import styles from './Main.module.scss';

const Main = () => {
	return (
		<div className={styles.container}>
			<Hero />
			<Benefits />
			<Features />
			<Signup />
		</div>
	);
};

export { Main };
