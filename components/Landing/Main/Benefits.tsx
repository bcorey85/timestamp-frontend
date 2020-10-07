import React from 'react';

import styles from './Benefits.module.scss';

const Benefits = () => {
	return (
		<React.Fragment>
			<section>
				<div className={styles.benefit}>
					<figure className={styles.benefit_img}>
						<img
							src='/images/landing/benefits1.jpg'
							alt='Man with concerned look on his face'
						/>
					</figure>
					<div />
					<article>
						<h2>Learning new skills is hard work.</h2>
						<p>
							Timestamp shows you meaningful progress statistics
							to motivate you to keep reaching for the next step.
						</p>
					</article>
				</div>
				<figure className={styles.arrow_center}>
					<img
						src='/images/landing/benefits-arrow-rl.svg'
						alt='arrow'
					/>
				</figure>
				<div className={styles.benefit_reverse}>
					<figure className={styles.benefit_img}>
						<img
							src='/images/landing/benefits2.jpg'
							alt='Man reading a stack of books'
						/>
					</figure>
					<article>
						<h2>You need a system to help you focus.</h2>
						<p>
							Timestamp is a simple ecosystem of tools that’s
							geared towards helping you grow as fast as possible.
						</p>
					</article>
				</div>
				<figure className={styles.arrow_center}>
					<img
						src='/images/landing/benefits-arrow-lr.svg'
						alt='arrow'
					/>
				</figure>
				<div className={styles.benefit}>
					<figure className={styles.benefit_img}>
						<img
							src='/images/landing/benefits3.jpg'
							alt='Girl smiling at computer'
						/>
					</figure>

					<article>
						<h2>And to keep you moving forward.</h2>
						<p>
							Timestamp gives you an unlimited note history and
							easy search features so you always know where to go
							next.
						</p>
					</article>
				</div>
			</section>
		</React.Fragment>
	);
};

export { Benefits };
