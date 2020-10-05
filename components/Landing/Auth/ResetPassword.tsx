import React, { useState, useEffect, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';

import { AuthContainer } from './shared/AuthContainer';
import { AuthHeader } from './shared/AuthHeader';
import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { ErrorDisplay } from '../../shared/ErrorDisplay';
import { ButtonContainer } from './shared/ButtonContainer';

import { login } from '../../../redux/user';
import { resetPasswordApiConfig } from '../../../api/auth';
import { useInputState } from '../../../hooks/useInputState';
import { useApiRequest } from '../../../hooks/useApiRequest';
import { ApiError } from '../../../api/index';
import { ErrorService } from '../../../utils/ErrorService';
import { useRouterService } from '../../../hooks/useRouterService';
import { setAppDataSynced } from '../../../redux/appData';
import { MessageContainer } from './shared/MessageContainer';

interface Errors {
	password?: string;
	passwordConfirm?: string;
	generic?: ApiError[];
}

const ResetPassword = (): JSX.Element => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ password, setPassword ] = useInputState('');
	const [ passwordConfirm, setPasswordConfirm ] = useInputState('');
	const [ errors, setErrors ] = useState<Errors>({
		password: null,
		passwordConfirm: null,
		generic: []
	});
	const { request: resetRequest, errors: resetErrors } = useApiRequest();
	const { router } = useRouterService();

	const dispatch = useDispatch();
	const { tokenId } = router.query;

	useEffect(
		() => {
			const errs = ErrorService.formatErrors(
				[ 'password', 'passwordConfirm' ],
				resetErrors
			);

			setErrors(errs);
		},
		[ resetErrors ]
	);

	const handlePasswordReset = async (e: SyntheticEvent) => {
		e.preventDefault();

		setIsLoading(true);
		const config = resetPasswordApiConfig({
			password,
			passwordConfirm,
			token: tokenId as string
		});
		const res = await resetRequest(config);

		setIsLoading(false);
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

		router.push.dashboard();
	};

	return (
		<AuthContainer>
			<AuthHeader>
				<h1>Reset Password</h1>
				<h5>Please submit a new password below</h5>
			</AuthHeader>
			<form>
				<div>
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
				<ButtonContainer>
					<Button
						onClick={handlePasswordReset}
						btnStyle='primary'
						isLoading={isLoading}>
						Reset Password
					</Button>
				</ButtonContainer>
				<MessageContainer>
					{isLoading ? (
						<div style={{ textAlign: 'center' }}>
							Please wait while free server warms up.
						</div>
					) : (
						<ErrorDisplay errors={errors.generic} />
					)}
				</MessageContainer>
			</form>
		</AuthContainer>
	);
};

export { ResetPassword };
