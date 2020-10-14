import React from 'react';

import { Button } from '../../shared/Button';

import styles from './Signup.module.scss';

const Signup = () => {
	return (
		<section className={styles.signup}>
			<article className={styles.text}>
				<h2>Ready to start?</h2>
				<p>
					Create a free account today and start building the skills
					for your future self.
				</p>
				<Button btnStyle='primary' href='/auth' link>
					Sign Up
				</Button>
			</article>
			<figure className={styles.signup_img}>
				<img
					src='/images/landing/signup.jpg'
					alt='Man working on computer'
				/>
			</figure>
		</section>
	);
};

export { Signup };
