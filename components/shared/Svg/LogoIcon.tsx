import React from 'react';

interface Props {
	className: any;
}

const LogoIcon = ({ className }: Props): JSX.Element => {
	return (
		<svg
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			fillRule='evenodd'
			strokeLinejoin='round'
			strokeMiterlimit='2'
			clipRule='evenodd'
			viewBox='0 0 29 30'>
			<path
				fill='var(--primary-btn)'
				d='M288.257 18.628c0-.504-.23-.987-.639-1.344a2.352 2.352 0 00-1.541-.556h-29.73c-.578 0-1.132.2-1.541.556-.409.357-.638.84-.638 1.344v26.436c0 .504.229.987.638 1.343a2.35 2.35 0 001.541.557h29.73c.578 0 1.133-.2 1.541-.557.409-.356.639-.839.639-1.343V18.628z'
				transform='translate(-505.697 -178.455) translate(519.531 42.237) matrix(.85071 0 0 .97563 -230.058 119.898)'
			/>
			<path
				fill='#fff'
				d='M531.05 194.872c-.794 5.294-5.365 9.358-10.878 9.358-6.071 0-11-4.929-11-11 0-5.505 4.051-10.07 9.332-10.875v2.567c-3.878.776-6.804 4.203-6.804 8.308 0 4.675 3.796 8.471 8.472 8.471 4.114 0 7.547-2.938 8.312-6.829h2.566zm-2.566-3.285a8.488 8.488 0 00-6.644-6.665v-2.567a11.017 11.017 0 019.21 9.232h-2.566z'
				transform='translate(-505.697 -178.455) translate(519.531 42.237) matrix(.9931 0 0 .9931 -40.6 90.883) translate(-482.262 -134.045) scale(1.00695)'
			/>
			<path
				fill='#fff'
				d='M559.836 101.189h-3.6v-2.203h9.752v2.203h-3.601v6.943h-2.551v-6.943z'
				transform='translate(-505.697 -178.455) translate(519.531 42.237) matrix(.9931 0 0 .9931 -40.6 90.883) translate(-547.473 -47.344) scale(1.0497)'
			/>
		</svg>
	);
};

export { LogoIcon };
