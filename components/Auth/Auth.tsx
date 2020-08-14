import { useEffect, useState } from 'react';
import Link from 'next/link';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

import { useInputState } from '../../hooks/useInputState';
import { useApiRequest } from '../../hooks/useApiRequest';
import { signupRequestConfig, loginRequestConfig } from '../../api/auth';
import styles from './Auth.module.scss';

const Auth = () => {
	const [ email, setEmail ] = useInputState('');
	const [ password, setPassword ] = useInputState('');
	const [ errors, setErrors ] = useState([]);
	const [ apiSignupRequest, signupData, signupErrors ] = useApiRequest();
	const [ apiLoginRequest, loginData, loginErrors ] = useApiRequest();

	useEffect(
		() => {
			setErrors([ ...signupErrors, ...loginErrors ]);
		},
		[ signupErrors, loginErrors ]
	);

	const handleSignup = async e => {
		e.preventDefault();

		const config = signupRequestConfig({ email, password });

		await apiSignupRequest(config);
	};

	const handleLogin = async e => {
		e.preventDefault();

		const config = loginRequestConfig({ email, password });

		await apiLoginRequest(config);
	};

	const errorDisplay = errors.map(error => {
		return <div key={error.message}>{error.message}</div>;
	});

	return (
		<div className={styles.container}>
			<form className={styles.form}>
				<div className={styles.header}>
					<h1>
						Capture your learning<br /> progress in time.
					</h1>
					<h5>Please login to your account</h5>
				</div>

				<Input
					type='email'
					id='email'
					label='Email'
					onChange={setEmail}
				/>
				<Input
					type='password'
					id='password'
					label='Password'
					onChange={setPassword}
				/>
				<div className={styles.reset_password}>
					<Link href='#'>
						<a className='link-gray'>Reset Password</a>
					</Link>
				</div>

				<div className={styles.btn_container}>
					<Button type='outline' onClick={handleSignup}>
						Sign Up
					</Button>
					<Button type='primary' onClick={handleLogin}>
						Login
					</Button>
				</div>

				{errors ? errorDisplay : null}
			</form>

			<div className={styles.image}>
				{/* <img src={'/images/login.jpg'} alt={'Timestamp Signup Image'} /> */}
			</div>
		</div>
	);
};

export { Auth };
