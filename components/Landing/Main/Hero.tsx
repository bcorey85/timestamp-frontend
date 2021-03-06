import Link from 'next/link';
import React from 'react';
import { Button } from '../../shared/Button';

import styles from './Hero.module.scss';

const Hero = () => {
	return (
		<React.Fragment>
			<section className={styles.hero}>
				<article className={styles.hero_text}>
					<h1>
						Capture&nbsp;Your&nbsp;Learning<br /> Progress In Time
					</h1>
					<p>
						Timestamp gives you the tools to make learning easier
						and create the memories of just how far you've come.
					</p>
					<Button btnStyle='primary' href='/auth' link>
						Sign Up
					</Button>
				</article>
				<figure className={styles.hero_img}>
					<img
						src='/images/landing/hero.jpg'
						alt='Girl drinking coffee and working on computer'
					/>
				</figure>
			</section>
			<figure className={styles.arrow_container}>
				<img
					src='/images/landing/hero-arrow.svg'
					className={styles.arrow}
					alt='Arrow'
				/>
			</figure>
		</React.Fragment>
	);
};

export { Hero };
