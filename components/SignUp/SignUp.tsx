import Link from 'next/link';

import { useInputState } from '../../hooks/useInputState';
import { useApiRequest } from '../../hooks/useApiRequest';
import { signupRequestConfig } from '../../api/auth';

import styles from './SignUp.module.scss';

const SignUp = () => {
	const [ email, setEmail ] = useInputState('');
	const [ password, setPassword ] = useInputState('');
	const [ apiSignupRequest, data, errors ] = useApiRequest();

	const handleSubmit = async e => {
		e.preventDefault();

		const config = signupRequestConfig({ email, password });

		await apiSignupRequest(config);
	};

	const errorDisplay = errors.map(error => {
		return <div key={error.message}>{error.message}</div>;
	});

	return (
		<div>
			<form className={styles.form}>
				<label>
					Email
					<input type='email' onChange={setEmail} />
				</label>
				<label>
					Password
					<input type='password' onChange={setPassword} />
				</label>
				<button onClick={handleSubmit}>Submit</button>
			</form>
			{errors ? errorDisplay : null}
			<Link href='/'>
				<a>Home</a>
			</Link>
		</div>
	);
};

export { SignUp };
