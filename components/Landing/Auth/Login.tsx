import React, { useEffect, useState, SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { ButtonContainer } from './shared/ButtonContainer';
import { AuthHeader } from './shared/AuthHeader';
import { MessageContainer } from './shared/MessageContainer';

import { useInputState } from '../../../hooks/useInputState';
import { useApiRequest } from '../../../hooks/useApiRequest';
import { loginApiConfig } from '../../../api/auth';
import { login } from '../../../redux/user';
import { ApiError } from '../../../api/index';
import { ErrorDisplay } from '../../shared/ErrorDisplay';
import { ErrorService } from '../../../utils/ErrorService';
import { setAppDataSynced } from '../../../redux/appData';
import styles from './Login.module.scss';

interface Props {
	toggleForm: (mode: string) => void;
}

interface Errors {
	email?: string;
	password?: string;
	generic?: ApiError[];
}

const Login = ({ toggleForm }: Props): JSX.Element => {
	const [ isLoadingLogin, setIsLoadingLogin ] = useState(false);
	const [ email, setEmail ] = useInputState('');
	const [ password, setPassword ] = useInputState('');
	const [ errors, setErrors ] = useState<Errors>({
		email: null,
		password: null,
		generic: []
	});
	const { request: loginRequest, errors: loginErrors } = useApiRequest();
	const dispatch = useDispatch();
	const router = useRouter();

	useEffect(
		() => {
			const errorArray = [ ...loginErrors ];
			const errors = ErrorService.formatErrors(
				[ 'email', 'password' ],
				errorArray
			);

			setErrors(errors);
		},
		[ loginErrors ]
	);

	const handleAuth = async (e: SyntheticEvent) => {
		e.preventDefault();

		setIsLoadingLogin(true);

		setErrors({
			email: null,
			password: null,
			generic: []
		});
		const loginConfig = loginApiConfig({ email, password });
		const res = await loginRequest(loginConfig);

		setIsLoadingLogin(false);

		if (res.success === false) {
			return;
		}

		dispatch(
			login({
				userId: res.data.id,
				token: res.data.token
			})
		);
		dispatch(setAppDataSynced(false));

		router.push(`/app/[userId]/dashboard`, `/app/${res.data.id}/dashboard`);
	};

	return (
		<form>
			<AuthHeader>
				<h1>Welcome to Timestamp</h1>
				<h5>Please sign up or login to your account</h5>
			</AuthHeader>
			<Input
				type='email'
				id='email'
				label='Email'
				error={errors.email}
				onChange={setEmail}
				value={email}
				autoComplete='username'
			/>
			<Input
				type='password'
				id='password'
				label='Password'
				error={errors.password}
				onChange={setPassword}
				value={password}
				autoComplete='current-password'
			/>
			<div className={styles.reset_password}>
				<Button
					btnStyle='link_gray'
					onClick={() => {
						toggleForm('forgot-password');
					}}>
					Forgot Password?
				</Button>
			</div>

			<ButtonContainer>
				<Button
					btnStyle='outline'
					onClick={() => {
						toggleForm('register');
					}}>
					Need an account?
				</Button>
				<Button
					btnStyle='primary'
					onClick={handleAuth}
					isLoading={isLoadingLogin}>
					Login
				</Button>
			</ButtonContainer>
			<MessageContainer>
				{isLoadingLogin ? (
					<div style={{ textAlign: 'center' }}>
						Please wait while free server warms up.
					</div>
				) : (
					<ErrorDisplay errors={errors.generic} />
				)}
			</MessageContainer>
		</form>
	);
};

export { Login };
