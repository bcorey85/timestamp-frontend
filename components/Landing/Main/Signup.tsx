import React from 'react';
import Link from 'next/link';

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
				<Link href='/auth'>
					<a>
						<Button btnStyle='primary'>Sign Up</Button>
					</a>
				</Link>
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
