import React, { useState, useEffect, SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { AuthContainer } from './shared/AuthContainer';
import { AuthHeader } from './shared/AuthHeader';
import { Input } from '../shared/Input';
import { Button } from '../shared/Button';
import { ErrorDisplay } from '../shared/ErrorDisplay';

import { login } from '../../redux/user';
import { resetPasswordApiConfig } from '../../api/auth';
import { useInputState } from '../../hooks/useInputState';
import { useApiRequest } from '../../hooks/useApiRequest';

import styles from './ResetPassword.module.scss';
import { formatErrors } from '../../utils/formatErrors';

interface Errors {
	password?: string;
	passwordConfirm?: string;
	generic?: ApiError[];
}

const ResetPassword = (): JSX.Element => {
	const [ password, setPassword ] = useInputState('');
	const [ passwordConfirm, setPasswordConfirm ] = useInputState('');
	const [ errors, setErrors ] = useState<Errors>({
		password: null,
		passwordConfirm: null,
		generic: []
	});
	const { request: resetRequest, errors: resetErrors } = useApiRequest();
	const router = useRouter();

	const dispatch = useDispatch();
	const { tokenid } = router.query;

	useEffect(
		() => {
			const errs = formatErrors(
				[ 'password', 'passwordConfirm' ],
				resetErrors
			);

			setErrors(errs);
		},
		[ resetErrors ]
	);

	const handlePasswordReset = async (e: SyntheticEvent) => {
		e.preventDefault();

		const config = resetPasswordApiConfig({
			password,
			passwordConfirm,
			token: tokenid as string
		});
		const res = await resetRequest(config);

		if (res.success === false) {
			return;
		}

		dispatch(
			login({
				userId: res.data.id,
				token: res.data.token
			})
		);

		router.push(`/app/[userId]/dashboard`, `/app/${res.data.id}/dashboard`);
	};

	return (
		<AuthContainer>
			<AuthHeader>
				<h1>Reset Password</h1>
				<h5>Please submit a new password below</h5>
			</AuthHeader>
			<form>
				<div className={styles.input_container}>
					<Input
						id='password'
						label='New Password'
						type='password'
						autoComplete='new-password'
						onChange={setPassword}
						value={password}
						error={errors.password}
					/>
					<Input
						id='password'
						label='Confirm Password'
						type='password'
						autoComplete='confirm-password'
						onChange={setPasswordConfirm}
						value={passwordConfirm}
						error={errors.passwordConfirm}
					/>
				</div>

				<Button onClick={handlePasswordReset} btnStyle='primary'>
					Reset Password
				</Button>
				<ErrorDisplay errors={errors.generic} />
			</form>
		</AuthContainer>
	);
};

export { ResetPassword };
