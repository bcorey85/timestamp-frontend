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
						<h2>Learning new skills can be hard work</h2>
						<p>
							Craft your own progress map and blaze your own
							trail. Our system helps you break down goals into
							bite-sized chunks.
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
						<h2>You need a system that helps you focus</h2>
						<p>
							We'll take care of remembering everything for you.
							Use our unlimited note history and easy search
							feature to keep you organized.
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
						<h2>And keeps you moving forward</h2>
						<p>
							See progress stats that motivate you to the next
							step. Look back at your personal history to see how
							much you've grown.
						</p>
					</article>
				</div>
			</section>
		</React.Fragment>
	);
};

export { Benefits };
