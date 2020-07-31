import { useInput } from '../hooks/useInput';
import { useApiRequest } from '../hooks/useApiRequest';
import { signupRequest } from '../api/auth';
import Link from 'next/link';
import { truncateSync } from 'fs';

const Login = () => {
	const [ email, setEmail ] = useInput('');
	const [ password, setPassword ] = useInput('');
	const [ signupApiRequest, signupData, signupErrors ] = useApiRequest(
		signupRequest({ email, password })
	);

	const handleSubmit = async e => {
		e.preventDefault();
		await signupApiRequest();
	};

	return (
		<div>
			login page
			<Link href='/'>
				<a>Home</a>
			</Link>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='email'>
						Email
						<input
							id='email'
							name='email'
							value={email}
							onChange={setEmail}
						/>
					</label>
				</div>
				<div>
					<label htmlFor='password'>
						Password
						<input
							id='password'
							name='password'
							type='password'
							value={password}
							onChange={setPassword}
						/>
					</label>
				</div>
				<button>Sign Up</button>
			</form>
		</div>
	);
};

export default Login;
