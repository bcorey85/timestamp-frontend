import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

import { useInputState } from '../../hooks/useInputState';
import { useApiRequest } from '../../hooks/useApiRequest';
import { signupRequestConfig, loginRequestConfig } from '../../api/auth';
import { login, selectUser } from '../../redux/user';
import styles from './Auth.module.scss';

const Auth = () => {
	const [ email, setEmail ] = useInputState('');
	const [ password, setPassword ] = useInputState('');
	const [ errors, setErrors ] = useState({ email: null, password: null });
	const [ apiSignupRequest, signupData, signupErrors ] = useApiRequest();
	const [ apiLoginRequest, loginData, loginErrors ] = useApiRequest();

	const router = useRouter();
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	useEffect(
		() => {
			const errorArray = [ ...signupErrors, ...loginErrors ];
			const errorField = field => {
				return (
					errorArray[
						errorArray.findIndex(err => err.field === field)
					] || null
				);
			};

			const errors = {
				email: errorField('email'),
				password: errorField('password')
			};

			setErrors(errors);
		},
		[ signupErrors, loginErrors ]
	);

	const signupConfig = signupRequestConfig({ email, password });
	const loginConfig = loginRequestConfig({ email, password });

	const handleAuth = async (e, config, request) => {
		e.preventDefault();

		const res = await request(config);

		if (res.success === false) {
			return;
		}
		dispatch(
			login({
				userId: res.data.id,
				token: res.data.token,
				data: {}
			})
		);
		router.push('/');
	};

	return (
		<div className={styles.container}>
			<form className={styles.form}>
				<img src='/images/logo-temp.svg' className={styles.logo} />
				<div className={styles.header}>
					<h1>
						Capture your learning<br /> progress in time.
					</h1>
					<h5>Please sign up or login to your account</h5>
				</div>
				<Input
					type='email'
					id='email'
					label='Email'
					error={errors.email}
					onChange={setEmail}
					autoComplete='username'
				/>
				<Input
					type='password'
					id='password'
					label='Password'
					error={errors.password}
					onChange={setPassword}
					autoComplete='current-password'
				/>
				<div className={styles.reset_password}>
					<Link href='#'>
						<a className='link-gray'>Reset Password</a>
					</Link>
				</div>

				<div className={styles.btn_container}>
					<Button
						type='outline'
						onClick={e =>
							handleAuth(e, signupConfig, apiSignupRequest)}>
						Sign Up
					</Button>
					<Button
						type='primary'
						onClick={e =>
							handleAuth(e, loginConfig, apiLoginRequest)}>
						Login
					</Button>
				</div>
				<div className={styles.error_container} />
			</form>

			<div className={styles.image} />
		</div>
	);
};

export { Auth };
